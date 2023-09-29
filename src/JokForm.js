
import React, { useState } from 'react';
import axios from 'axios';

function JokeForm() {
  const [author, setAuthor] = useState('');
  const [email, setEmail] = useState('');
  const [jokeContent, setJokeContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();


    const response = await axios.post('https://api.chucknorris.io/jokes', {
      author,
      email,
      jokeContent,
    });

    console.log(response.data);
    setAuthor('');
    setEmail('');
    setJokeContent('');
  };

  return (
    <div>
      <h2>Publication de Blague</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Auteur:</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          <label>Email de l'auteur:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Contenu de la blague:</label>
          <textarea value={jokeContent} onChange={(e) => setJokeContent(e.target.value)} />
        </div>
        <button type="submit">Publier</button>
      </form>
    </div>
  );
}

export default JokeForm;
