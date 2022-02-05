const API_KEY = process.env.REACT_APP_API_KEY;

export const imgBase = "https://image.tmdb.org/t/p/original";
export const baseUrl = "https://api.themoviedb.org/3";
export const trendingUrl = `${baseUrl}/trending/all/day?api_key=${API_KEY}&language=em-US&append_to_response=videos&page=1`;
export const movieUrl = `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=`;
export const movieDetailUrl = `${baseUrl}/movie`;
// export const API_URL = `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=`;

export const genres = [
  { id: 28, name: "action" },
  { id: 12, name: "adventure" },
  { id: 16, name: "animation" },
  { id: 35, name: "comedy" },
  { id: 80, name: "crime" },
  { id: 99, name: "documentary" },
  { id: 18, name: "drama" },
  { id: 10751, name: "family" },
  { id: 14, name: "fantasy" },
  { id: 36, name: "history" },
  { id: 27, name: "horror" },
  { id: 10402, name: "music" },
  { id: 9648, name: "mystery" },
  { id: 10749, name: "romance" },
  { id: 878, name: "science fiction" },
  { id: 10770, name: "tv movie" },
  { id: 53, name: "thriller" },
  { id: 10752, name: "war" },
  { id: 37, name: "western" },
];

// eslint-disable-next-line import/no-anonymous-default-export
// export default {
//   fetchTrending: {
//     title: "Trending",
//     url: `/trending/all/week?api_key=${API_KEY}&language=em-US`,
//   },
//   fetchTopRated: {
//     title: "Top Rated",
//     url: `/movie/top_rated?api_key=${API_KEY}&language=em-US`,
//   },
//   fetchActionMovies: {
//     title: "Action",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//   },
//   fetchComedyMovies: {
//     title: "Comedy",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//   },
//   fetchHorrorMovies: {
//     title: "Horror",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//   },
//   fetchRomanceMovies: {
//     title: "Romance",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//   },
//   fetchMystery: {
//     title: "Mystery",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
//   },
//   fetchSciFi: {
//     title: "SciFi",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
//   },
//   fetchWestern: {
//     title: "Western",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
//   },
//   fetchAnimation: {
//     title: "Animation",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
//   },
//   fetchTV: {
//     title: "TV Movie",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
//   },
// };
