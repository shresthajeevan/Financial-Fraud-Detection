import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/custom.css';

// Utility function to parse the CSV file
const parseCSV = (file: File) => {
  return new Promise<any[]>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string;
      const rows = text.split('\n').map(row => row.split(','));
      const headers = rows[0];
      const data = rows.slice(1).map(row => {
        let obj: { [key: string]: string } = {};
        row.forEach((cell, index) => {
          obj[headers[index]] = cell;
        });
        return obj;
      });
      resolve(data);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsText(file);
  });
};

// Simple fraud detection logic (can be enhanced with ML or rules)
const detectFraud = (data: any[]) => {
  // For simplicity, we'll flag transactions where the amount is greater than a threshold.
  // This can be replaced with more complex fraud detection logic.
  const fraudThreshold = 10000; // Example threshold (10,000 units of currency)
  return data.filter(transaction => parseFloat(transaction['Amount']) > fraudThreshold);
};

const Index = () => {
  const [file, setFile] = useState<File | null>(null); // Explicitly type the file state
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [fraudResults, setFraudResults] = useState<any[]>([]); // State to store fraud detection results

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0]; // Optional chaining to handle null files
    
    if (uploadedFile && uploadedFile.type === "text/csv" && uploadedFile.size <= 10485760) {
      setFile(uploadedFile);
      setErrorMessage("");
    } else {
      setFile(null);
      setErrorMessage("Please upload a valid CSV file (Max size: 10MB).");
    }
  };

  const handleUploadClick = async () => {
    if (file) {
      try {
        // Parse the CSV file
        const data = await parseCSV(file);
        // Perform fraud detection on the parsed data
        const detectedFraud = detectFraud(data);
        setFraudResults(detectedFraud);
        alert(`Fraud detection completed. Found ${detectedFraud.length} fraudulent transactions.`);
      } catch (error) {
        setErrorMessage("Error parsing the file. Please try again.");
        console.error(error);
      }
    } else {
      alert("Please select a valid file before uploading.");
    }
  };

  return (
    <div className="relative min-h-screen bg-light-blue-100 text-gray-800 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-light-blue-100"></div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
          <circle cx="100" cy="100" r="80" stroke="#FF6A00" strokeWidth="4" fill="transparent" className="animate__animated animate__fadeIn animate__delay-2s" />
          <circle cx="1820" cy="100" r="80" stroke="#FF4500" strokeWidth="4" fill="transparent" className="animate__animated animate__fadeIn animate__delay-3s" />
          <circle cx="100" cy="980" r="80" stroke="#FFD700" strokeWidth="4" fill="transparent" className="animate__animated animate__fadeIn animate__delay-4s" />
          <circle cx="1820" cy="980" r="80" stroke="#ADFF2F" strokeWidth="4" fill="transparent" className="animate__animated animate__fadeIn animate__delay-5s" />
          <circle cx="300" cy="200" r="60" stroke="#FF6347" strokeWidth="4" fill="transparent" className="animate__animated animate__fadeIn animate__delay-6s" />
          <circle cx="1600" cy="800" r="60" stroke="#FFD700" strokeWidth="4" fill="transparent" className="animate__animated animate__fadeIn animate__delay-7s" />
          <circle cx="600" cy="300" r="50" stroke="#FF6A00" strokeWidth="4" fill="transparent" className="animate__animated animate__fadeIn animate__delay-8s" />
          <circle cx="1400" cy="500" r="50" stroke="#FF4500" strokeWidth="4" fill="transparent" className="animate__animated animate__fadeIn animate__delay-9s" />
        </svg>
      </div>

      <div className="absolute top-5 right-5 z-20">
        <div className="flex space-x-4">
          <Link to="/login">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-400 transition-all duration-200 ease-in-out">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-400 transition-all duration-200 ease-in-out">
              Signup
            </button>
          </Link>
        </div>
      </div>

      <div className="container relative py-12 z-10">
        <header className="mb-12 text-center animate__animated animate__fadeIn animate__delay-1s">
          <div className="flex items-center justify-center mb-6">
            <div className="icon-placeholder h-16 w-16 mr-3 animate__animated animate__pulse animate__infinite">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h1 className="text-6xl font-extrabold text-gray-800 animate__animated animate__fadeIn animate__delay-1s">
              Fraud Finder
            </h1>
          </div>
          <p className="text-xl font-medium max-w-3xl mx-auto animate__animated animate__fadeIn animate__delay-2s">
            The next generation of fraud detection powered by AI. Secure, accurate, and real-time detection of fraudulent activity with <span className="font-bold text-orange-400">99.8% accuracy</span>.
          </p>
        </header>

        <div className="max-w-5xl mx-auto space-y-12">
          <div className="bg-light-blue-50 p-10 rounded-xl shadow-2xl transform transition-all hover:scale-105 hover:shadow-xl hover:bg-light-blue-200 cursor-pointer ease-out duration-300 hover:shadow-blue-400">
            <div className="flex items-center mb-6">
              <div className="icon-placeholder h-8 w-8 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white animate__animated animate__pulse animate__infinite" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h2 className="text-3xl font-semibold text-gray-800">Upload Your Transaction Data</h2>
            </div>
            <div className="border-2 border-dashed border-blue-300 rounded-xl p-16 text-center hover:border-blue-400 transition-all duration-300 ease-in-out hover:bg-blue-50 hover:scale-105">
              <div className="max-w-md mx-auto">
                <svg className="mx-auto h-12 w-12 text-blue-200 animate__animated animate__bounceIn animate__delay-1s" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <h3 className="mt-4 text-xl font-bold text-gray-800">Drag and drop your CSV file</h3>
                <p className="mt-2 text-md text-gray-600">Or click to browse files</p>
                <p className="mt-2 text-xs text-gray-600">Max size: 10MB</p>
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleFileChange}
                  className="mt-4 p-2 rounded-lg border-2 border-gray-300"
                />
                {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={handleUploadClick}
              className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-400 transition-all duration-200 ease-in-out"
            >
              Upload
            </button>
          </div>

          {fraudResults.length > 0 && (
            <div className="bg-light-blue-50 p-10 rounded-xl shadow-2xl animate__animated animate__fadeIn animate__delay-3s hover:scale-105">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <div className="icon-placeholder h-8 w-8 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 animate__animated animate__pulse animate__infinite" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m14 0h2a2 2 0 002-2v-6a2 2 0 00-2-2h-2a2 2 0 00-2 2v6m-8 0v-6h-4v6m6 0h-2" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-semibold text-blue-500">Fraudulent Transactions Detected</h2>
                </div>
              </div>
              <div className="overflow-auto">
                <table className="min-w-full table-auto">
                  <thead>
                    <tr>
                      <th className="text-left px-4 py-2">Transaction ID</th>
                      <th className="text-left px-4 py-2">Amount</th>
                      <th className="text-left px-4 py-2">Date</th>
                      <th className="text-left px-4 py-2">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fraudResults.map((transaction, index) => (
                      <tr key={index} className="bg-white border-b">
                        <td className="px-4 py-2">{transaction['TransactionID']}</td>
                        <td className="px-4 py-2">${transaction['Amount']}</td>
                        <td className="px-4 py-2">{transaction['Date']}</td>
                        <td className="px-4 py-2">{transaction['Details']}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
