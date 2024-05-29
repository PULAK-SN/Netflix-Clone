const API_KEY = "3c42da33c17936b097f21cb61d24660f";

const request = {
  fetchTranding: `trending/all/week?api_key=${API_KEY}`,
  fetchNetflixOriginals: `discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `movie/top_rated?api_key=${API_KEY}`,
  fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocomentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default request;
