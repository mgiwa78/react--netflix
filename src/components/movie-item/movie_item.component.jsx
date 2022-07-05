import { MovieImg, MovieItemContainer } from "./movie_item.style";

const MovieItem = ({ movie }) => {
  return (
    
    <MovieItemContainer>
      <MovieImg src={`${movie.poster_path}`} />
    </MovieItemContainer>
  );
};

export default MovieItem;
