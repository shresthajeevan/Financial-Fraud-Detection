import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Eye, EyeOff, Check, X } from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeCard, setActiveCard] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordFeedback, setPasswordFeedback] = useState("");
  
  // Rotate through fraud detection cards
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Check password strength
  useEffect(() => {
    if (formData.password) {
      let strength = 0;
      let feedback = "";
      
      if (formData.password.length >= 8) strength += 1;
      if (/[A-Z]/.test(formData.password)) strength += 1;
      if (/[a-z]/.test(formData.password)) strength += 1;
      if (/[0-9]/.test(formData.password)) strength += 1;
      if (/[^A-Za-z0-9]/.test(formData.password)) strength += 1;
      
      setPasswordStrength(strength);
      
      if (strength < 2) feedback = "Very weak";
      else if (strength < 3) feedback = "Weak";
      else if (strength < 4) feedback = "Medium";
      else if (strength < 5) feedback = "Strong";
      else feedback = "Very strong";
      
      setPasswordFeedback(feedback);
    } else {
      setPasswordStrength(0);
      setPasswordFeedback("");
    }
  }, [formData.password]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    
    // Validate password strength
    if (passwordStrength < 3) {
      setError("Please use a stronger password");
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Add your signup logic here
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated API call
      navigate("/");
    } catch (err) {
      setError("Failed to create account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Fraud detection cards data
  const cards = [
    { title: "Transaction Analysis", color: "from-emerald-500 to-teal-500" },
    { title: "Pattern Recognition", color: "from-blue-500 to-cyan-500" },
    { title: "Risk Assessment", color: "from-amber-500 to-orange-500" },
    { title: "Anomaly Detection", color: "from-rose-500 to-pink-500" },
    { title: "Behavioral Analysis", color: "from-violet-500 to-purple-500" },
    { title: "Real-time Monitoring", color: "from-slate-500 to-gray-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 flex items-center justify-center p-2 animate-fade-in">
      <div className="w-full max-w-6xl flex flex-col md:flex-row rounded-xl overflow-hidden shadow-xl animate-slide-up">
        {/* Left side - Fraud Detection Illustration */}
        <div className="w-full md:w-3/5 bg-gradient-to-br from-slate-800 to-gray-900 p-6 md:p-8 flex flex-col justify-center relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMjB2MjBIMzB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-10"></div>
          
          {/* Floating orbs */}
          <div className="absolute top-8 left-8 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl animate-pulse-slow"></div>
          <div className="absolute bottom-8 right-8 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse-slower"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl animate-pulse-slow"></div>
          
          {/* Fraud detection illustration */}
          <div className="relative z-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-4 animate-bounce-slow">FraudGuard</h2>
            <p className="text-slate-300 mb-8 text-base">Advanced financial fraud detection system</p>
            
            {/* Fraud detection cards with animation */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {cards.map((card, index) => (
                <div 
                  key={index} 
                  className={`aspect-video rounded-lg overflow-hidden transition-all duration-500 transform ${
                    index === activeCard 
                      ? 'scale-105 shadow-lg ring-1 ring-white' 
                      : 'opacity-70 scale-95'
                  }`}
                  style={{ 
                    background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                    '--tw-gradient-from': card.color.split(' ')[0],
                    '--tw-gradient-to': card.color.split(' ')[2],
                  } as React.CSSProperties}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs drop-shadow-md">{card.title}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-slate-300 text-sm space-y-2">
              <p className="animate-pulse">Protect your financial transactions</p>
              <p className="animate-pulse delay-100">Detect and prevent fraudulent activities</p>
            </div>
          </div>
        </div>
        
        {/* Right side - Signup Form */}
        <div className="w-full md:w-2/5 bg-white p-8 md:p-12 overflow-y-auto max-h-screen">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
              <p className="text-gray-600 text-base font-medium">Join FraudGuard to protect your financial data</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm animate-shake font-medium">
                  {error}
                </div>
              )}
              
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4 animate-slide-in-left">
                <div className="group">
                  <Label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1.5 group-focus-within:text-emerald-600 transition-colors">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-base"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                  />
                </div>
                <div className="group">
                  <Label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1.5 group-focus-within:text-emerald-600 transition-colors">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-base"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                  />
                </div>
              </div>
              
              {/* Email Field */}
              <div className="animate-slide-in-left delay-100 group">
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5 group-focus-within:text-emerald-600 transition-colors">
                  Email Address
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all pl-10 text-base"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>
              
              {/* Password Field */}
              <div className="animate-slide-in-left delay-300 group">
                <Label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5 group-focus-within:text-emerald-600 transition-colors">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all pl-10 pr-10 text-base"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-emerald-500 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                
                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-gray-500 font-medium">Password strength:</span>
                      <span className={`text-sm font-semibold ${
                        passwordStrength < 2 ? "text-red-500" :
                        passwordStrength < 3 ? "text-amber-500" :
                        passwordStrength < 4 ? "text-emerald-600" :
                        passwordStrength < 5 ? "text-emerald-600" : "text-emerald-600"
                      }`}>
                        {passwordFeedback}
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-300 ${
                          passwordStrength < 2 ? "bg-red-500 w-1/5" :
                          passwordStrength < 3 ? "bg-amber-500 w-2/5" :
                          passwordStrength < 4 ? "bg-emerald-600 w-3/5" :
                          passwordStrength < 5 ? "bg-emerald-600 w-4/5" : "bg-emerald-600 w-full"
                        }`}
                      ></div>
                    </div>
                    <div className="mt-2 grid grid-cols-5 gap-1.5">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <div 
                          key={level}
                          className={`h-1.5 rounded-full ${
                            passwordStrength >= level 
                              ? level < 3 ? "bg-amber-500" : "bg-emerald-600"
                              : "bg-gray-200"
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Confirm Password Field */}
              <div className="animate-slide-in-left delay-400 group">
                <Label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1.5 group-focus-within:text-emerald-600 transition-colors">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all pl-10 pr-10 text-base ${
                      formData.confirmPassword && formData.password !== formData.confirmPassword
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300"
                    }`}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                  />
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <button 
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-emerald-500 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                  <p className="mt-1.5 text-sm text-red-500 font-medium">Passwords do not match</p>
                )}
              </div>
              
              {/* Terms and Conditions */}
              <div className="animate-slide-in-up delay-500">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      className="h-4 w-4 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500 transition-colors"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="text-gray-600 font-medium">
                      I agree to the{" "}
                      <a href="#" className="text-emerald-600 hover:text-emerald-800 transition-colors font-semibold">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-emerald-600 hover:text-emerald-800 transition-colors font-semibold">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="animate-slide-in-up delay-600">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed text-base font-semibold shadow-lg"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating account...
                    </span>
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </div>
              
              {/* Login Link */}
              <p className="text-center text-sm text-gray-600 animate-fade-in delay-700 font-medium">
                Already have an account?{" "}
                <Link to="/login" className="text-emerald-600 hover:text-emerald-800 transition-colors font-semibold">
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
