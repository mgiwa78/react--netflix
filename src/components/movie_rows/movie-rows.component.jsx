import axios from "axios";
import { useEffect, useState } from "react";
import MovieItem from "../movie-item/movie_item.component";
import {
  MovieRowContainer,
  MovieRowLower,
  MovieRowTitle,
} from "./movie-rows.styles";

const MovieRow = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  const startFetch = async () => {
    const data = await axios.get(fetchUrl);
    setMovies(data.data.results);
    console.log(data.data.results);
  };

  useEffect(() => {
    startFetch();
  }, []);

  return (
    <MovieRowContainer>
      <MovieRowTitle>{title}</MovieRowTitle>
      <MovieRowLower>
        {movies?.map((movie, inde) => {
          if (inde < 20) {
            movie.poster_path = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
            return <MovieItem key={movie.id} movie={movie}></MovieItem>;
          }
        })}
      </MovieRowLower>
    </MovieRowContainer>
  );
};

export default MovieRow;
