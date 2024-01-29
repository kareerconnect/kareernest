import React, { useState, useEffect } from 'react';

const Home = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/sample')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>Welcome to the Frontend!</h1>
      <p>Message from the backend: {message}</p>
    </div>
  );
};

export default Home;
