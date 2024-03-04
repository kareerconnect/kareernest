import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Cards from '../../components/Cards';  // Import the Cards component
import News from '../../components/News';    // Import the News component

const Home = () => {
  useEffect(() => {
    document.body.className = 'home-page';
    return () => {
      document.body.className = '';
    };
  }, []);

  // State to hold news data
  const [newsData, setNewsData] = useState([]);

// Fetch news data when the component mounts
useEffect(() => {
  const fetchNewsData = async () => {
    try {
      // Replace the URL and API key with your News API endpoint and key
      const response = await fetch(
        'apikey'
      );

      const data = await response.json();

      // Check if the API response contains articles
      if (data.articles && data.articles.length > 0) {
        // Map the articles to the format expected by the Cards component
        const formattedData = data.articles.map((article) => ({
          name: article.title,
          news: article.description,
          image: article.urlToImage || 'https://via.placeholder.com/150',
          url: article.url,
        }));

        // Set the formatted data to state
        setNewsData(formattedData);
      } else {
        console.error('No articles found in the API response.');
      }
    } catch (error) {
      console.error('Error fetching news data:', error);
    }
  };

  fetchNewsData();
}, []);


  return (
    <div className="flex flex-col min-h-screen w-screen">
      <Navbar />

      <main className="flex-1 w-screen mb-1 p-2">
        <Cards data={newsData} />  {/* Use the Cards component to display news */}
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
