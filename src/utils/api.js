// src/utils/api.js
import axios from 'axios';

const apiKey = 'cf4d8fb3e32d1f38fd41fa0b0cf96851';
const baseUrl = 'https://api.themoviedb.org/3/account/20693124/favorite/movies?language=en-US&page=1&sort_by=created_at.asc';

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};
