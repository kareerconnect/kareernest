import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-white text-2xl font-bold">KareerNest</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={toggleDropdown} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none">Opportunities</button>
                {dropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Link to="/opportunity/jobs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Jobs</Link>
                      <Link to="/opportunity/internships" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Internships</Link>
                      <Link to="/opportunity/hackathons" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Hackathons</Link>
                      <Link to="/opportunity/competitions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Competitions</Link>
                    </div>
                  </div>
                )}
                <Link to="/update" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Tech Updates</Link>
                <Link to="/blogs" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blogs</Link>
                <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>

              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>

              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/opportunity/jobs" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900">Jobs</Link>
          <Link to="/opportunity/internships" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Internships</Link>
          <Link to="/opportunity/hackathons" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Hackathons</Link>
          <Link to="/opportunity/competitions" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Competitions</Link>
          <Link to="/update" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Tech Updates</Link>
          <Link to="/blogs" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Blogs</Link>
          <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">About Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
