import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MovieConstext as MovieContext } from "../../context/movies.context";
import MovieSection from "../movie-section/movie-section.component";
import { API_KEY, requests } from "../request";
import UserHero from "../user-hero/user-hero.component";
import { UserHomeContainer } from "./user-home.styles";

const UserHome = () => {
  useEffect(() => {
    UserMovies();
    // setHomeBackDrop([results][Math.random ** results.length]);
  }, []);
  // const { movies, SetMoviesData } = useContext(MovieContext);
  // useEffect(() => {
  //   console.log(movies);
  //   // setHomeBackDrop([results][Math.random ** results.length]);
  // }, [movies]);
  // console.log(movies);
  // // const [trendingMovies, setTrendingMovies] = useState([]);
  // // const fetchTrending = () => {
  // //   fetchMovies();
  // // };

  const [homeBackDrop, setHomeBackDrop] = useState([]);

  const UserMovies = async (url = "get_latest_movies") => {
    // const data = await fetch(requests[url]).then((dat) => dat.json());
    const data = await axios.get(requests.get_popular_movies);
    const result = data.data.results;
    const backdrop = result[Math.floor(Math.random() * result.length)];
    backdrop.backdrop_path = `https://image.tmdb.org/t/p/original/${backdrop.backdrop_path}`;
    setHomeBackDrop(backdrop);
  };
  const up = async () => {
    const data = await axios.get(requests.get_latest_movies);
    console.log(data.data.results);
    const sdata = await axios.get(requests.get_popular_movies);
    console.log(sdata.data.results);
  };

  up();

  return (
    <UserHomeContainer>
      <UserHero backdrop={homeBackDrop} />
      <MovieSection />
    </UserHomeContainer>
  );
};

export default UserHome;
