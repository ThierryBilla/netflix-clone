//App.jsx

import React from 'react';
import Header from './components/Header'; 
import Hero from './components/Hero';
import Categories from './components/Categories';
import MovieList from './components/MovieList';
import SeriesList from './components/SeriesList';

import './styles/styles.css';

function App() {
  const isLoggedIn = false; // Change this to true if the user is logged in
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} /> {/* Pass isLoggedIn prop to Header */}
      <Hero />
      <Categories />
      <MovieList title="Netflix Originals" category="netflixOriginals" />
      <MovieList title="Top Rated" category="topRated" />
      <MovieList title="Popular Now" category="popularNow" />
      <SeriesList title="Netflix Originals" category="netflixOriginals" />
      <SeriesList title="Top Rated" category="topRated" />
      <SeriesList title="Popular Now" category="popularNow" />
    </div>
  );
}

export default App;
