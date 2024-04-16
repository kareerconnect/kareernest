import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import News from '../../components/News';

const Update = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    document.body.className = 'home-page';

    const fetchNewsData = async () => {
      try {
        // Make the API call to fetch news data
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=bbed1c4157c64a4f8e0f8bb84a281682');
        const data = await response.json();

        setNewsData(data.articles);
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    fetchNewsData();

    return () => {
      document.body.className = '';
    };
  }, []);

  return (
    <div className="flex flex-col w-screen">
      <Navbar />
      <News data={newsData} />
      <Footer />
    </div>
  );
};

export default Update;
