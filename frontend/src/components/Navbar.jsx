import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-bold">KareerNest</Link>
        <Link to="/oppurtunities" className="text-cyan-600 text-lg font-semibold">Oppurtunities</Link>
        <Link to="/updates" className="text-cyan-600 text-lg font-semibold">Tech Updates</Link>
        <Link to="/blogs" className="text-cyan-600 text-lg font-semibold">Blogs</Link>
        <Link to="/about" className="text-cyan-600 text-lg font-semibold">About Us</Link>
          <div className="flex space-x-4">

            <Link to="/" className="text-lg text-green-500 ">Home</Link>
            <Link to="/login" className="text-lg text-green-600">Login</Link>
            <Link to="/signup" className="text-lg text-green-700">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
