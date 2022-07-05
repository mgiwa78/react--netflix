import React, { createContext, useState } from "react";
import { requests } from "../components/request";
export const MovieConstext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, SetMovies] = useState([]);

  const SetMoviesData = async (data) => {
    SetMovies(data);
  };

  return (
    <MovieConstext.Provider value={{ movies, SetMoviesData }}>
      {children}
    </MovieConstext.Provider>
  );
};
