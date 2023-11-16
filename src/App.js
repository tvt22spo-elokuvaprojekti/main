// App.js
import React, { useState, useEffect } from 'react';
import { fetchMovies } from './utils/api'; // Assuming this is the correct path to your api.js file

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data...');
        const movieData = await fetchMovies();
        console.log('Data fetched:', movieData);
        setMovies(movieData);
      } catch (err) {
        setError('API request failed. Please try again later.'); // Customize the error message
        console.error('Error fetching movie data:', err);
      }
    };
  
    fetchData();
  }, []);
  return (
    <div>
      <h1>Movie App</h1>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <div>
          {/* Display movie information */}
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
