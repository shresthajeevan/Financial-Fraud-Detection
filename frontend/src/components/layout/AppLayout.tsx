// src/components/layout/AppLayout.tsx
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface AppLayoutProps {
  children: ReactNode; // Explicitly type the children prop
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <nav>
          <ul className="mt-4">
            <li>
              <Link to="/" className="p-2 mb-2 text-gray-300 hover:bg-gray-700 rounded-md">
                Home
              </Link>
            </li>
            <li>
              <Link to="/settings" className="p-2 mb-2 text-gray-300 hover:bg-gray-700 rounded-md">
                Settings
              </Link>
            </li>
            <li>
              <button className="p-2 text-red-500 hover:bg-gray-700 rounded-md">
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
