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
        const response = await fetch('apikey');
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
