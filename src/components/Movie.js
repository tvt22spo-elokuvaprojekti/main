// src/components/Movie.js
import React from 'react';

const Movie = ({ movie }) => {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
      {/* Add rating and comment components here */}
    </div>
  );
};

export default Movie;
