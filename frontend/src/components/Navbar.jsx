import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogout from '../hooks/useLogout';

const Navbar = () => {
  const { loading, logout } = useLogout();


  return (
    <nav className="rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 p-4 mx-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-purple-600 text-3xl font-bold">KareerNest</Link>
          <Link to="/oppurtunity" className="text-cyan-600 text-lg font-semibold">Oppurtunities</Link>
          <Link to="/update" className="text-cyan-600 text-lg font-semibold">Tech Updates</Link>
          <Link to="/blogs" className="text-cyan-600 text-lg font-semibold">Blogs</Link>
          <Link to="/about" className="text-cyan-600 text-lg font-semibold">About Us</Link>
          {/* <div className="flex space-x-4">
            <Link to="/" className="text-lg text-green-500 ">Home</Link>
            <Link to="/login" className="text-lg text-green-600">Login</Link>
            <Link to="/signup" className="text-lg text-green-700">Sign Up</Link>
          </div> */}
          <div>
            <button onClick={logout} className="text-gray-300 bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Logout</button>
          </div>
        </div>
      </div >
    </nav >
  );
};

export default Navbar;
