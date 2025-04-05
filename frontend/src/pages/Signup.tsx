import React from 'react';
import '../styles/custom.css';

const Signup: React.FC = () => {
  // Randomly position the floating icons on the screen
  const getRandomPosition = () => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    return { x, y };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] flex items-center justify-center px-6 py-12 overflow-hidden relative">
      {/* Floating Icons Container */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Create 100 floating icons */}
        {[...Array(100)].map((_, index) => {
          const { x, y } = getRandomPosition();
          return (
            <div
              key={index}
              className={`floating-icon ${index % 2 === 0 ? 'bg-teal-400' : 'bg-pink-400'} rounded-full w-12 h-12`}
              style={{
                left: `${x}px`,
                top: `${y}px`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.5 + 0.5, // random opacity between 0.5 and 1
                animationDuration: `${3 + Math.random() * 3}s`, // random float speed
              }}
            />
          );
        })}
      </div>

      {/* Signup Card */}
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 glassy border border-white border-opacity-20 rounded-3xl shadow-2xl p-10 relative z-10">
        {/* Left Branding Section */}
        <div className="hidden md:flex flex-col justify-center items-start px-8 text-white space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight">
            Welcome to <span className="text-teal-400">Fraud Finder</span>
          </h1>
          <p className="text-lg text-gray-300">
            The most accurate, real-time fraud detection tool. Join us and protect your data with style and speed.
          </p>
          <div className="mt-6">
            <button className="bg-teal-500 hover:bg-teal-400 transition-all duration-300 ease-in-out px-6 py-3 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Signup Form */}
        <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-lg w-full text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Create a New Account</h2>

          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:ring-2 focus:ring-teal-400 focus:outline-none transition-all"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-1">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:ring-2 focus:ring-teal-400 focus:outline-none transition-all"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-white mb-1">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:ring-2 focus:ring-teal-400 focus:outline-none transition-all"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-teal-500 hover:bg-teal-400 transition-all duration-300 py-3 rounded-xl font-semibold shadow-md hover:shadow-xl"
            >
              Sign Up
            </button>

            <p className="text-sm text-gray-300 text-center mt-4">
              Already have an account? <a href="/login" className="text-teal-400 hover:underline">Sign In</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
