import '../styles/custom.css';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-light-blue-100 text-gray-800 overflow-hidden">

      {/* Full-screen background with a soft light color */}
      <div className="absolute inset-0 z-0 bg-light-blue-100"></div>

      {/* Animated Background Circles - Smaller and at Corners */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
          {/* Top Left Circle */}
          <circle cx="100" cy="100" r="80" stroke="#FF6A00" strokeWidth="4" fill="transparent" className="animate__animated animate__fadeIn animate__delay-2s" />
          {/* Top Right Circle */}
          <circle cx="1820" cy="100" r="80" stroke="#FF4500" strokeWidth="4" fill="transparent" className="animate__animated animate__fadeIn animate__delay-3s" />
          {/* Bottom Left Circle */}
          <circle cx="100" cy="980" r="80" stroke="#FFD700" strokeWidth="4" fill="transparent" className="animate__animated animate__fadeIn animate__delay-4s" />
          {/* Bottom Right Circle */}
          <circle cx="1820" cy="980" r="80" stroke="#ADFF2F" strokeWidth="4" fill="transparent" className="animate__animated animate__fadeIn animate__delay-5s" />
          {/* Small Circles Near Corners */}
          <circle cx="300" cy="200" r="60" stroke="#FF6347" strokeWidth="4" fill="transparent" className="animate__animated animate__fadeIn animate__delay-6s" />
          <circle cx="1600" cy="800" r="60" stroke="#FFD700" strokeWidth="4" fill="transparent" className="animate__animated animate__fadeIn animate__delay-7s" />
          <circle cx="600" cy="300" r="50" stroke="#FF6A00" strokeWidth="4" fill="transparent" className="animate__animated animate__fadeIn animate__delay-8s" />
          <circle cx="1400" cy="500" r="50" stroke="#FF4500" strokeWidth="4" fill="transparent" className="animate__animated animate__fadeIn animate__delay-9s" />
        </svg>
      </div>

      {/* Floating icons in the background */}
      <div className="absolute top-0 left-0 z-0 animate__animated animate__fadeIn animate__delay-2s">
        <div className="floating-icon animate__animated animate__pulse animate__infinite">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-orange-300 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
      </div>

      <div className="container relative py-12 z-10">
        {/* Main Header with Animated Text and Glowing Effect */}
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

        {/* Call to Action Section with Glowing Effect */}
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
              </div>
            </div>
          </div>

          {/* Results Section with Shiny Animations */}
          <div className="bg-light-blue-50 p-10 rounded-xl shadow-2xl animate__animated animate__fadeIn animate__delay-3s hover:scale-105">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="icon-placeholder h-8 w-8 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 animate__animated animate__pulse animate__infinite" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-semibold text-gray-800">Results Overview</h2>
              </div>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-400 transition-all duration-200 ease-in-out">Download Results</button>
            </div>
            <div className="flex space-x-6">
              <div className="bg-blue-50 rounded-lg p-6 w-1/3 text-center shadow-md hover:scale-105 transition-all duration-300">
                <p className="text-xl font-semibold text-gray-700">Total Transactions</p>
                <p className="text-3xl font-bold text-gray-800">1,234</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 w-1/3 text-center shadow-md hover:scale-105 transition-all duration-300">
                <p className="text-xl font-semibold text-gray-700">Fraudulent Activity Detected</p>
                <p className="text-3xl font-bold text-red-600">125</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 w-1/3 text-center shadow-md hover:scale-105 transition-all duration-300">
                <p className="text-xl font-semibold text-gray-700">Accuracy Rate</p>
                <p className="text-3xl font-bold text-green-600">99.8%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
