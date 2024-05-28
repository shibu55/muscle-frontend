"use client";

import { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [message, setMessage] = useState('');

  const handlePing = async () => {
    try {
      const response = await axios.get('http://localhost:8080/ping');
      setMessage(response.data);
    } catch (error) {
      console.error('Error pinging server:', error);
      setMessage('Error');
    }
  };

  return (
    <div>
      <h1>Ping Pong App</h1>
      <button onClick={handlePing}>Ping</button>
      <p>{message}</p>
    </div>
  );
};

export default Home;
