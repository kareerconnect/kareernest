import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    document.body.className = 'home-page';

    const fetchNewsData = async () => {
      try {
        // Replace the URL and API key with your News API endpoint and key
        const response = await fetch(
          'https://newsapi.org/v2/everything?q=technology&from=2024-04-12&language=en&sortBy=publishedAt&apiKey=3d07392996c54397a43cb183376a98c7'
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
    <div className="flex flex-row flex-wrap p-4 grid-cols-3 mt-4 gap-4 ml-14">
      {newsData.map((d) => (
        <Card sx={{maxWidth:345,minHeight:350,maxHeight:350}} key={d.name}>
        <Link to={d.url} target="_blank" rel="noopener noreferrer">
            <CardActionArea>
              <CardMedia
                component="img"
                image={d.image}
                sx={{objectFit:"fill",minHeight:150,maxHeight:150}}
              />
              <CardContent className="overflow-hidden">
                <Typography  sx={{minHeight:48,maxHeight:48, objectFit:"contain",overflow:"auto",fontWeight:"bold",fontSize:"15px"}}>
                  {d.name}
                </Typography>
                <Typography  sx={{minHeight:175,maxHeight:175,objectFit:"contain"}} variant="body2"  color="text.secondary">
                  {d.news}
                </Typography>
              </CardContent>
            </CardActionArea>
            </Link>
          </Card>
      ))}
    </div>
  );
};

export default News;
