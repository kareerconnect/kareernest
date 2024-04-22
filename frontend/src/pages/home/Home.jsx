import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Cards from '../../components/Cards';  
import GetStarted from '../../components/GetStarted';
import Header from '../../components/Header';

const Home = () => {
  useEffect(() => {
    document.body.className = 'home-page';
    return () => {
      document.body.className = '';
    };
  }, []);
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <Navbar />
      <Header/>
      <GetStarted/>
      <main className="flex-1 w-screen mb-1 p-2">
        <Cards/>
        <div className="flex mt-20 h-[100px]">
          <div className="w-1/2 shadow-sm shadow-green-800 rounded-full mr-2">
            <p className="text-center font-semibold text-3xl"> Upcoming Competitions</p>
            <p className="text-center text-xl"> Details About upcoming Competitions will appear here.</p>
          </div>
          <div className="w-1/2 shadow-sm shadow-green-800 rounded-full">
            <p className="text-center font-semibold text-3xl"> Hackathons</p>
            <p className="text-center text-xl"> Details About upcoming Hackathons will appear here.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
