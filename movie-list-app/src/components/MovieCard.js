import React from 'react';
import { FcRating } from "react-icons/fc";

import '../styles/moiveCard.css'

const MovieCard = ({ movie, genreMap }) => {
  const releaseDate = movie.release_date; // Assuming movie object has a release_date property

  return (
    <div class="movie">
      <div class="movie-img" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie?.poster_path})` }}></div>
      <div class="text-movie-cont">
        <div class="mr-grid">
          <div class="col1">
            <h3>{movie?.original_title}</h3>
            <ul class="movie-gen">
              {
                movie?.genre_ids?.map((genre, index) => {
                  return <li>{genreMap[genre]}{movie?.genre_ids?.length-1 === index ? " ": ", " }</li>
                })
              }
            </ul>
          </div>
        </div>
        <div class="mr-grid summary-row">
          <div class="col2">
            <h5>SUMMARY</h5>
          </div>
          <p class="movie-likes"><FcRating id="rating-icon" />{movie?.popularity}
          </p>
        </div>
        <div class="mr-grid">
          <div class="col1">
            <p class="movie-description">{movie.overview}</p>
          </div>
        </div>
        <div class="mr-grid actors-row">
          <div class="col1">
            <p class="movie-actors"><b>Release Date: </b>{" "}{movie.release_date}</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default MovieCard;
