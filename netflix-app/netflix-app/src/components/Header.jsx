//Header.jsx

import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import netflixLogo from '../assets/Netflix_2015_logo.svg';
import { FaSearch } from 'react-icons/fa';

function Header() {
  const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate('/login'); 
  };

  const handleSignUpClick = () => {
    navigate('/sign-up');
  };

  return (
    <header>
      <div className="logo">
      <Link to="/">
        <img src={netflixLogo} alt="Netflix Logo" />
        </Link>
      </div>
      <nav>
        <div className="nav-items">
          <div className="search-bar">
            <input type="text" placeholder="Search for a movie or TV show" />
            <button><FaSearch /></button>
          </div>
          <div className="user-actions">
            <button onClick={handleLoginClick}>Log In</button>
            <button onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
