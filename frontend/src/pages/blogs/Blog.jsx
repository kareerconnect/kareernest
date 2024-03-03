import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import News from '../../components/News';


const Blog = () => {
  useEffect(() => {
    document.body.className = 'home-page';
    return () => {
      document.body.className = '';
    };
  }, []);
  const data = [
    {
      name: `Blog1`,
      news: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },{
      name: `Blog2`,
      news: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },{
      name: `Blog3`,
      news: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },{
      name: `Blog4`,
      news: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },{
      name: `Blog5`,
      news: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },{
      name: `Blog6`,
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

export default Blog;
