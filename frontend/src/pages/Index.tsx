import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FileUpload from '../components/FileUpload';
import Dashboard from '../components/Dashboard';
import { parseCSV, Transaction } from '../utils/csvParser';
import { detectFraud, FraudDetectionResult } from '../utils/fraudDetection';
import { toast } from 'sonner';
import { Button } from '../components/ui/button';
import { ShieldAlert, FileSpreadsheet, BarChart4, Upload, RefreshCw } from 'lucide-react';
import '../styles/custom.css';

const Index = () => {
  const [file, setFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [fraudResults, setFraudResults] = useState<FraudDetectionResult | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileProcessed = async (uploadedFile: File) => {
    setIsProcessing(true);
    setErrorMessage("");
    try {
      console.log("Starting file processing for:", uploadedFile.name);
      const data = await parseCSV(uploadedFile);
      console.log("CSV parsed successfully. Number of transactions:", data.length);
      
      if (data.length === 0) {
        throw new Error("No valid transactions found in the CSV file");
      }
      
      const detectedFraud = detectFraud(data);
      console.log("Fraud detection completed. Fraudulent transactions:", detectedFraud.fraudulentTransactions.length);
      
      setFraudResults(detectedFraud);
      toast.success(`Fraud detection completed. Found ${detectedFraud.fraudulentTransactions.length} fraudulent transactions.`);
    } catch (error) {
      console.error("Error in file processing:", error);
      const errorMessage = error instanceof Error ? error.message : "Error processing file";
      setErrorMessage(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReset = () => {
    setFile(null);
    setFraudResults(null);
    setErrorMessage("");
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
            <Button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-400 transition-all duration-200 ease-in-out">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-400 transition-all duration-200 ease-in-out">
              Signup
            </Button>
          </Link>
        </div>
      </div>

      <div className="container relative py-12 z-10">
        <header className="mb-12 text-center animate__animated animate__fadeIn animate__delay-1s">
          <div className="flex items-center justify-center mb-6">
            <div className="icon-placeholder h-16 w-16 mr-3 animate__animated animate__pulse animate__infinite">
              <ShieldAlert className="h-8 w-8 text-white" />
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
          {!fraudResults ? (
            <div className="bg-light-blue-50 p-10 rounded-xl shadow-2xl transform transition-all hover:scale-105 hover:shadow-xl hover:bg-light-blue-200 cursor-pointer ease-out duration-300 hover:shadow-blue-400">
              <div className="flex items-center mb-6">
                <FileSpreadsheet className="h-6 w-6 text-white animate__animated animate__pulse animate__infinite" />
                <h2 className="text-3xl font-semibold text-gray-800">Upload Your Transaction Data</h2>
              </div>
              <FileUpload onFileProcessed={handleFileProcessed} isProcessing={isProcessing} />
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-2xl p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Analysis Results</h2>
                <Button 
                  onClick={handleReset}
                  className="bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Upload New File
                </Button>
              </div>
              <Dashboard result={fraudResults} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;