const API_KEY = process.env.REACT_APP_API_KEY;

export const imgBase = "https://image.tmdb.org/t/p/original";

export const trendingUrl = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=em-US&page=1`;

export const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
