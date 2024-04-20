import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import JobList from '../../components/JobList';

const Opportunity = () => {
  return (
    <div className="flex flex-col w-screen">
      <Navbar />
      <JobList />
      <Footer />
    </div>
  );
};

export default Opportunity;
