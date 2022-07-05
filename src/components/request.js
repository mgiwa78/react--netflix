export const API_KEY = "dff67cddfb956256b2eca3dac8d4b893";

const URL = "https://api.themoviedb.org/3";

export const requests = {
  get_latest_movies: `${URL}/movie/latest?api_key=${API_KEY}&language=en-US`,
  get_popular_movies: `${URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  get_top_rated_movies: `${URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  get_trending: `${URL}/trending/all/day?api_key=${API_KEY}`,
};
