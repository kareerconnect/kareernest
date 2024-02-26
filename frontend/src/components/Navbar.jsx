import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white text-lg font-semibold">KareerNest</Link>

          <div className="flex space-x-4">
            <Link to="/" className="text-white">Home</Link>
            <Link to="/login" className="text-white">Login</Link>
            <Link to="/signup" className="text-white">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
