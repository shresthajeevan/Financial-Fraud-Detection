from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
import joblib
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)
CORS(app)

# Config for file uploads
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['ALLOWED_EXTENSIONS'] = {'csv'}

# Load the trained model and scaler
rf_model = joblib.load('random_forest_model.pkl')
scaler = joblib.load('scaler.pkl')

# Ensure the upload folder exists
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

# Function to check allowed file extensions
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

@app.route('/upload', methods=['POST'])
def upload_file():
    # Check if the request has the file part
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['file']

    # If no file is selected
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    # If file is allowed, process it
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)

        # Read the CSV file
        df = pd.read_csv(file_path)

        # Check if necessary columns are in the uploaded file
        required_columns = df.columns.difference(['Class'])
        if required_columns.empty:
            return jsonify({'error': 'Invalid file format, missing required columns'}), 400

        # Separate features and target variable
        X = df.drop('Class', axis=1)
        y = df['Class']

        # Scale the features
        X_scaled = scaler.transform(X)

        # Predict using the trained model
        prediction = rf_model.predict(X_scaled)

        # Return the result as a JSON response
        results = {'fraudulent': bool(prediction[0])}
        return jsonify(results)

    return jsonify({'error': 'File not allowed'}), 400

if __name__ == '__main__':
    app.run(debug=True)
