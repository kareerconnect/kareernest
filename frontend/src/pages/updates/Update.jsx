import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import News from '../../components/News';

const Update = () => {
  return (
    <div className="flex flex-col w-screen">
      <Navbar />
      <News/>
      <Footer />
    </div>
  );
};

export default Update;
