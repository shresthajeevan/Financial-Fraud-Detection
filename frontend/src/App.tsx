// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Index from './pages/Index';     // Your home page
import Login from './pages/Login'; 
import Signup from './pages/Signup';    // Your login page

const App: React.FC = () => (
  <BrowserRouter>
    <Toaster position="top-right" />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<div className="text-white text-center mt-20 text-xl">Page not found</div>} />
    </Routes>
  </BrowserRouter>
);

export default App;
