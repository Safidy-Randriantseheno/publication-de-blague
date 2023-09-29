
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function JokeDisplay() {
  const [randomJoke, setRandomJoke] = useState('');

  useEffect(() => {
    
    const fetchRandomJoke = async () => {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      setRandomJoke(response.data.value);
    };

    fetchRandomJoke();
  }, []);

  return (
    <div>
      <h2>Blague Aléatoire</h2>
      <p>{randomJoke}</p>
    </div>
  );
}

export default JokeDisplay;
