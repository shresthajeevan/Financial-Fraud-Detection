import '../styles/custom.css';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-teal-300 via-indigo-400 to-purple-500 text-white overflow-hidden">

      {/* Full-screen background with a gradient */}
      <div className="absolute inset-0 z-0 bg-cover bg-center"></div>
      <div className="absolute inset-0 z-0 bg-black opacity-60"></div>

      <div className="container relative py-12 z-10">
        {/* Main Header with Animated Text */}
        <header className="mb-12 text-center animate__animated animate__fadeIn animate__delay-1s">
          <div className="flex items-center justify-center mb-6">
            <div className="icon-placeholder h-16 w-16 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-indigo-400">
              Fraud Finder
            </h1>
          </div>
          <p className="text-xl font-medium max-w-3xl mx-auto animate__animated animate__fadeIn animate__delay-2s">
            The next generation of fraud detection powered by AI. Secure, accurate, and real-time detection of fraudulent activity with <span className="font-bold text-teal-400">99.8% accuracy</span>.
          </p>
        </header>

        {/* Call to Action Section with Animation */}
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="bg-gradient-to-r from-teal-500 to-teal-700 p-10 rounded-xl shadow-2xl transform transition-all hover:scale-105 hover:shadow-xl hover:bg-teal-600 cursor-pointer ease-out duration-300">
            <div className="flex items-center mb-6">
              <div className="icon-placeholder h-8 w-8 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h2 className="text-3xl font-semibold text-white">Upload Your Transaction Data</h2>
            </div>
            <div className="border-2 border-dashed border-teal-300 rounded-xl p-16 text-center hover:border-teal-400 transition-all duration-300 ease-in-out">
              <div className="max-w-md mx-auto">
                <svg className="mx-auto h-12 w-12 text-teal-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <h3 className="mt-4 text-xl font-bold text-teal-100">Drag and drop your CSV file</h3>
                <p className="mt-2 text-md text-teal-200">Or click to browse files</p>
                <p className="mt-2 text-xs text-teal-200">Max size: 10MB</p>
              </div>
            </div>
          </div>

          {/* Results Section with Fancy Animations */}
          <div className="bg-gradient-to-b from-black to-transparent p-10 rounded-xl shadow-2xl animate__animated animate__fadeIn animate__delay-3s">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="icon-placeholder h-8 w-8 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-semibold text-teal-200">Results Overview</h2>
              </div>
              <button className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-400 transition-all duration-300 ease-in-out">
                Analyze Another File
              </button>
            </div>

            {/* Statistics Cards with Live Animations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-teal-500/50 backdrop-blur-lg p-6 rounded-xl border-4 border-teal-300 shadow-lg transform transition-transform hover:scale-105">
                <h3 className="text-sm font-medium text-teal-200">Total Transactions</h3>
                <p className="mt-4 text-4xl font-extrabold text-teal-200 animate__animated animate__bounceIn animate__delay-1s">1,248</p>
              </div>
              <div className="bg-red-500/50 backdrop-blur-lg p-6 rounded-xl border-4 border-red-300 shadow-lg transform transition-transform hover:scale-105">
                <h3 className="text-sm font-medium text-red-200">Flagged Transactions</h3>
                <p className="mt-4 text-4xl font-extrabold text-red-200 animate__animated animate__bounceIn animate__delay-1s">23</p>
              </div>
              <div className="bg-green-500/50 backdrop-blur-lg p-6 rounded-xl border-4 border-green-300 shadow-lg transform transition-transform hover:scale-105">
                <h3 className="text-sm font-medium text-green-200">Risk Score</h3>
                <p className="mt-4 text-4xl font-extrabold text-green-200 animate__animated animate__bounceIn animate__delay-1s">7.2%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-center text-gray-200 py-8">
        <p className="text-lg">© 2025 Fraud Finder | All Rights Reserved @Jeevan Shrestha</p>
      </footer>
    </div>
  );
};

export default Index;
