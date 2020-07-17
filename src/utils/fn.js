import {DEFAULT_GENRE} from "../utils/const.js";

export const getMoviesListOfActiveGenre = (movies, activeGenre) => {
  return activeGenre === DEFAULT_GENRE ? movies : movies.filter((movie) => movie.genre === activeGenre);
};

export const getAllGenresList = (allMovies) => {
  const allGenres = [DEFAULT_GENRE].concat(Array.from(new Set(allMovies.map((movie) => movie.genre))));
  return allGenres.length > 10 ? allGenres.slice(0, 10) : allGenres;
};
