import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-gray-600">KareerNest © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
