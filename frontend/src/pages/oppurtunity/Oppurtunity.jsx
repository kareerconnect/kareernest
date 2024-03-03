import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Cards from '../../components/Cards';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Oppurtunity = () => {
  useEffect(() => {
    document.body.className = 'home-page';
    return () => {
      document.body.className = '';
    };
  }, []);
  const data = [
    {
      name: `Hackathon1`,
      news: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },{
      name: `Hackathon2`,
      news: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },{
      name: `Hackathon3`,
      news: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },{
      name: `Hackathon4`,
      news: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },{
      name: `Hackathon5`,
      news: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },{
      name: `Hackathon6`,
      news: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
  ];
  const data1 = [
    {
      name: `Internship1`,
      news: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },{
      name: `Internship2`,
      news: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },{
      name: `Internship3`,
      news: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },{
      name: `Internship4`,
      news: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },{
      name: `Internship5`,
      news: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },{
      name: `Internship6`,
      news: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
  ];const data2 = [
    {
      name: `Job1`,
      news: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },{
      name: `Job2`,
      news: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },{
      name: `Job3`,
      news: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },{
      name: `Job4`,
      news: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },{
      name: `Job5`,
      news: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },{
      name: `Job6`,
      news: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
  ];
  return (
    <div className="flex flex-col w-screen">
      <Navbar />

      {/* <main className="flex-1 w-screen mb-1 p-2"> */}
        {/* <h1 className="text-3xl font-semibold mb-2">Home Page</h1> */}
        <Cards data={data}/>
        <Cards data={data1}/>
        <Cards data={data2}/>        
      {/* </main> */}
      <Footer />
    </div>
  );
};

export default Oppurtunity;
