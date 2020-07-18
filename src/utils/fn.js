import {DEFAULT_GENRE} from "../utils/const.js";

const COUNT_OF_VISIBLE_GENRES = 10;

export const getMoviesListOfActiveGenre = (movies, activeGenre) => {
  return activeGenre === DEFAULT_GENRE ? movies : movies.filter((movie) => movie.genre === activeGenre);
};

export const getAllGenresList = (allMovies) => {
  const allGenres = [DEFAULT_GENRE].concat(Array.from(new Set(allMovies.map((movie) => movie.genre))));
  return allGenres.length > COUNT_OF_VISIBLE_GENRES ? allGenres.slice(0, COUNT_OF_VISIBLE_GENRES) : allGenres;
};
