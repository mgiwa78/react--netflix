import MovieItem from "../movie-item/movie_item.component";
import MovieRow from "../movie_rows/movie-rows.component";
import { requests } from "../request";
import { MovieSectioncontainer } from "./movie-section.style";

const MovieSection = () => {
  return (
    <MovieSectioncontainer>
      <MovieRow
        title="Top Rated Movies"
        fetchUrl={requests.get_popular_movies}
      />
      <MovieRow title="Trending Movies" fetchUrl={requests.get_trending} />
    </MovieSectioncontainer>
  );
};
export default MovieSection;
