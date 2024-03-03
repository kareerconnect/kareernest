import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Cards from '../../components/Cards';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
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
    <div className="flex flex-col min-h-screen w-screen">
      <Navbar />

      <main className="flex-1 w-screen mb-1 p-2">
        {/* <h1 className="text-3xl font-semibold mb-2">Home Page</h1> */}
        <Cards data={data}/>
        <div className='flex mt-20 h-[100px]'>
        <div className='w-1/2 shadow-sm shadow-green-800 rounded-full mr-2'>
          <p className=' text-center font-semibold text-3xl'> Upcoming Competitions</p>
           <p className='text-center text-xl'> Details About upcoming Competitions will appear here.</p>
          </div>
          <div className='w-1/2 shadow-sm shadow-green-800 rounded-full'>
          <p className=' text-center font-semibold text-3xl'> Hackathons</p>
           <p className='text-center text-xl'> Details About upcoming Hackathons will appear here.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
