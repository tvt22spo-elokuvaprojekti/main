// App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movie data from the API
    axios.get('https://api.themoviedb.org/3/account/20693124/favorite/movies?language=en-US&page=1&sort_by=created_at.asc', {
      params: {
        api_key: 'Bearer cf4d8fb3e32d1f38fd41fa0b0cf96851', // Replace with your actual API key
        language: 'en-US',
        page: 1,
      },
    })
    .then(response => {
      setMovies(response.data.results);
    })
    .catch(error => {
      console.error('Error fetching movie data:', error);
    });
  }, []);

  return (
    <div>
      <h1>Movie App</h1>
      <div>
        {/* Display movie information */}
        {movies.map(movie => (
          <div key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
