//MovieList.jsx

import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

function MovieList({ title, category }) {
  const [movies, setMovies] = useState([]);
  const sliderRef = useRef();

  useEffect(() => {
    let url;
    if (category === "netflixOriginals") {
      url = 'https://api.themoviedb.org/3/discover/tv?api_key=cc076071beed47c9a1fe05709e3850f4&with_networks=213';
      

    } else if (category === "topRated") {
      url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=cc076071beed47c9a1fe05709e3850f4';
    } else if (category === "popularNow") {
      url = 'https://api.themoviedb.org/3/movie/popular?api_key=cc076071beed47c9a1fe05709e3850f4';
    }

    fetch(url)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error('Erreur lors de la récupération des films :', error));
  }, [category]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  // Nouvelle méthode pour gérer le défilement de la souris
  const handleWheel = (event) => {
    if (sliderRef.current) {
      if (event.deltaY < 0) {
        sliderRef.current.slickPrev();
      } else {
        sliderRef.current.slickNext();
      }
    }
  };

  return (
    <section className="movie-list" onWheel={handleWheel}>
      <h2>{title}</h2>
      <Slider ref={sliderRef} {...settings}>
        {movies.map(movie => {
          // Vérifie si la catégorie est 'netflixOriginals' et attribue 'tv' ou 'movie' en conséquence
          const mediaType = category === "netflixOriginals" ? (movie.media_type === 'tv' ? 'tv' : 'movie') : 'movie';
          
          return (
            <Link key={movie.id} to={`/${mediaType}/${movie.id}`} className="movie-link">
              <div className="movie">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title || movie.name} />
                
              </div>
            </Link>
          );
        })}
      </Slider>
    </section>
  );
}

export default MovieList;
