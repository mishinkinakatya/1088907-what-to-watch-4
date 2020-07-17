import {DEFAULT_GENRE, INITIAL_COUNT_VISIBLE_MOVIES_ON_MAIN_PAGE} from "../utils/const.js";

const COUNT_OF_VISIBLE_GENRES = 10;

export const getMoviesListOfActiveGenre = (movies, activeGenre) => {
  return activeGenre === DEFAULT_GENRE ? movies : movies.filter((movie) => movie.genre === activeGenre);
};

export const getAllGenresList = (allMovies) => {
  const allGenres = [DEFAULT_GENRE].concat(Array.from(new Set(allMovies.map((movie) => movie.genre))));
  return allGenres.length > COUNT_OF_VISIBLE_GENRES ? allGenres.slice(0, COUNT_OF_VISIBLE_GENRES) : allGenres;
};

export const getIncrementForCountOfVisibleMovies = (countMoviesOfActiveGenre, countOfVisibleMoviesOnMainPage) => {
  const diff = countMoviesOfActiveGenre - countOfVisibleMoviesOnMainPage;
  return diff > 0 && diff < INITIAL_COUNT_VISIBLE_MOVIES_ON_MAIN_PAGE ? diff : INITIAL_COUNT_VISIBLE_MOVIES_ON_MAIN_PAGE;
};
