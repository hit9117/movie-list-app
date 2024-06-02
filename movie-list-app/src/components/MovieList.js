import React from 'react';
import MovieCard from './MovieCard';
import '../styles/movieList.css';

const MovieList = ({ movies, genreMap }) => {
  return (
    <div className="movie-list">
      {
        movies.map(movie => {
           return <MovieCard movie={movie} genreMap={genreMap} />
        })
      }
    </div>
  );
};

export default MovieList;
