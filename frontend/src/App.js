import React from 'react';
import './App.css';

import logo from './assets/logo.svg';

function App() {
  return (
   <div className="container">
     <img src={logo} alt="AirCnC"/>

     <div className="content">
       <p>
         Offer <strong>seats</strong> to programmers and find <strong>talents</strong>!
       </p>

       <form action="">
        <label htmlFor="email">E-MAIL *</label>
        <input type="email" id="email" placeholder="Your email"/>

        <button type="submit" className="btn">Enter</button>
       </form>
     </div>
   </div>
  );
}

export default App;
