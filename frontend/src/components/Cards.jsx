import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {Link } from 'react-router-dom';

const Cards=()=> {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    document.body.className = 'home-page';

    const fetchNewsData = async () => {
      try {
        // Replace the URL and API key with your News API endpoint and key
        const response = await fetch(
          'https://newsapi.org/v2/everything?q=technology&from=2024-04-10&language=en&sortBy=publishedAt&apiKey=3d07392996c54397a43cb183376a98c7'
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
          setNewsData(formattedData.slice(0,6));
        } else {
          console.error('No articles found in the API response.');
        }
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    fetchNewsData();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3 ,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className='w-11/12 m-auto'>
      <div className="mt-5">
      <Slider {...settings}>
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
      </Slider>
      </div>
      
    </div>
  );
};

export default Cards;