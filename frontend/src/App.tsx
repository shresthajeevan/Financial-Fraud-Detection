// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Index from './pages/Index'; // Assuming this page exists

const App: React.FC = () => (
  <BrowserRouter>
    <AppLayout>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </AppLayout>
  </BrowserRouter>
);

export default App;
