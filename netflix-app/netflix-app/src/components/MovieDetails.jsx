import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './MovieDetailsPage.css';

function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);
  const { id } = useParams();
  const [isMovie, setIsMovie] = useState(true);

  useEffect(() => {
    const isCurrentMovie = !(id.startsWith('tv_'));
    setIsMovie(isCurrentMovie);
    const baseURL = `https://api.themoviedb.org/3/${isCurrentMovie ? 'movie' : 'tv'}/${id.replace('tv_', '')}?api_key=cc076071beed47c9a1fe05709e3850f4`;

    fetch(baseURL)
      .then(response => response.json())
      .then(data => {
        setMovie(data);
        fetchSimilar(data.id);
      })
      .catch(error => console.error('Erreur lors de la récupération des détails du film:', error));
  }, [id]);

  const fetchSimilar = (movieId) => {
    const similarURL = `https://api.themoviedb.org/3/${isMovie ? 'movie' : 'tv'}/${movieId}/similar?api_key=cc076071beed47c9a1fe05709e3850f4`;
    fetch(similarURL)
      .then(response => response.json())
      .then(data => {
        setSimilarMovies(data.results);
      })
      .catch(error => console.error('Erreur lors de la récupération des films similaires:', error));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: null,
    prevArrow: null,
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
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const handleWheel = (event) => {
    event.preventDefault();
    const slider = document.querySelector('.slick-slider');
    if (event.deltaY > 0) {
      slider.slickNext();
    } else {
      slider.slickPrev();
    }
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="movie-details-page" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}>
        <div className="movie-details-page-content">
          <h2>{movie.title || movie.name}</h2>
          {movie.overview && <p>{movie.overview}</p>}
          {movie.release_date && <p>Release Date: {movie.release_date}</p>}
          <button>Regarder maintenant</button>
          {!movie.overview && <p>Les détails de ce film ne sont pas disponibles pour le moment.</p>}
        </div>
      </div>
      <div className="similar-movies-section" onWheel={handleWheel}>
        <h3>Films similaires</h3>
        <Slider {...settings}>
          {similarMovies.map((simMovie) => (
            <Link key={simMovie.id} to={`/movie/${simMovie.id}`}>
              <div className="similar-movie">
                <img src={`https://image.tmdb.org/t/p/w200${simMovie.poster_path}`} alt={simMovie.title || simMovie.name} />
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default MovieDetailsPage;
