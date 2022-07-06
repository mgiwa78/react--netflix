import MovieItem from "../movie-item/movie_item.component";
import MovieRow from "../movie_rows/movie-rows.component";
import { requests } from "../request";
import { MovieSectioncontainer } from "./movie-section.style";

const MovieSection = () => {
  return (
    <MovieSectioncontainer>
      <MovieRow title="Popular Movies" fetchUrl={requests.get_popular_movies} />
      <MovieRow title="Horror Movies" fetchUrl={requests.get_horror_movies} />
      <MovieRow title="Action Movies" fetchUrl={requests.get_action_movies} />
      <MovieRow title="Comedy Movies" fetchUrl={requests.get_comedy_movies} />
      <MovieRow
        title="Decumentary Movies"
        fetchUrl={requests.get_documentaries_movies}
      />
      <MovieRow title="Romance Movies" fetchUrl={requests.get_romance_movies} />
      <MovieRow
        title="Trending Movies"
        fetchUrl={requests.get_trending_movies}
      />
    </MovieSectioncontainer>
  );
};
export default MovieSection;
