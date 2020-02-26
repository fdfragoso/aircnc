import React, { useState } from 'react';
import './App.css';
import api from './services/api'

import logo from './assets/logo.svg';

function App() {
  const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault()

    const response = await api.post('/sessions', { email });

    const { _id } = response.data;
   
    localStorage.setItem('user', _id);

  }
  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />

      <div className="content">
        <p>
          Offer <strong>seats</strong> to programmers and find <strong>talents</strong>!
       </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />

          <button type="submit" className="btn">Enter</button>
        </form>
      </div>
    </div>
  );
}

export default App;
