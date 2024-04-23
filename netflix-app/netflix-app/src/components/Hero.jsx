// Hero.jsx

import React from 'react';
import netflixBackground from '../assets/hero-banner.jpg'; 

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${netflixBackground})` }}>
      <div className="content">
        <h1>Welcome to Netflix</h1>
        <p>Watch your favorite movies and TV shows anytime, anywhere.</p>
        <button>Get Started</button>
      </div>
    </section>
  );
}

export default Hero;
