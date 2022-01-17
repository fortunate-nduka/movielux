export const imgBase = "https://image.tmdb.org/t/p/original";
const API_KEY = process.env.REACT_APP_API_KEY;

export const trendingUrl = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=em-US&page=1`;
