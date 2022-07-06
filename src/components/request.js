export const API_KEY = "dff67cddfb956256b2eca3dac8d4b893";

const URL = "https://api.themoviedb.org/3";

export const requests = {
  get_popular_movies: `${URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  get_horror_movies: `${URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  get_romance_movies: `${URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  get_comedy_movies: `${URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  get_documentaries_movies: `${URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
  get_action_movies: `${URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  get_trending_movies: `${URL}/trendinf/all/week?api_key=${API_KEY}&language=en-US`,
};
