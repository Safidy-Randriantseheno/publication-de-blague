
import React, { Component } from 'react';
import axios from 'axios';

class JokeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      email: '',
      jokeContent: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    
    const { author, email, jokeContent } = this.state;

    
    const response = await axios.post('https://api.chucknorris.io/jokes', {
      author,
      email,
      jokeContent,
    });

    
    console.log(response.data);

   
    this.setState({
      author: '',
      email: '',
      jokeContent: '',
    });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { author, email, jokeContent } = this.state;

    return (
      <div>
        <h2>Publication de Blague</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Auteur:</label>
            <input type="text" name="author" value={author} onChange={this.handleInputChange} />
          </div>
          <div>
            <label>Email de l'auteur:</label>
            <input type="email" name="email" value={email} onChange={this.handleInputChange} />
          </div>
          <div>
            <label>Contenu de la blague:</label>
            <textarea name="jokeContent" value={jokeContent} onChange={this.handleInputChange} />
          </div>
          <button type="submit">Publier</button>
        </form>
      </div>
    );
  }
}

export default JokeForm;
