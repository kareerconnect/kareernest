import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import News from '../../components/News';


const Oppurtunity = () => {
  useEffect(() => {
    document.body.className = 'home-page';
    return () => {
      document.body.className = '';
    };
  }, []);
  const data = [
    {
      name: `News1`,
      news: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },{
      name: `News2`,
      news: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },{
      name: `News3`,
      news: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },{
      name: `News4`,
      news: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },{
      name: `News5`,
      news: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },{
      name: `News6`,
      news: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
  ];

  return (
    <div className="flex flex-col w-screen">
      <Navbar />
        <News data={data}/>        
      <Footer />
    </div>
  );
};

export default Oppurtunity;
