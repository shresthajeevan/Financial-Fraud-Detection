
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-4">
      <div className="py-4">
        <h2 className="font-bold text-xl">My App</h2>
      </div>
      
      <nav className="mt-6">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `block py-2 px-4 rounded ${isActive ? "bg-gray-200" : "hover:bg-gray-200"}`
          }
        >
          Home
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;