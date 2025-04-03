// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index'; // Assuming this page exists

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  </BrowserRouter>
);

export default App;
