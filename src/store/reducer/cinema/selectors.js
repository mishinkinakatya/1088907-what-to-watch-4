import {createSelector} from "reselect";
import NameSpace from "../../name-space.js";
import {getMovies} from "../data/selectors.js";
import {DEFAULT_GENRE} from "../../../utils/const.js";


const NAME_SPACE = NameSpace.CINEMA;

export const getActiveMovieById = (state, ownProps) => {
  const movies = getMovies(state);
  const movieId = ownProps.propsRouteId;
  const activeMovie = movies.find((movie) => movie.id === movieId);

  return activeMovie;
};

export const getActiveGenre = (state) => {
  return state[NAME_SPACE].activeGenre;
};

export const getMaxCountOfVisibleMovies = (state) => {
  return state[NAME_SPACE].maxCountOfVisibleMovies;
};

export const getMoviesListOfActiveGenre = createSelector(
    getMovies,
    getActiveGenre,
    (movies, activeGenre) => {
      const moviesOfActiveGenre = activeGenre === DEFAULT_GENRE ? movies : movies.filter((movie) => movie.genre === activeGenre);
      return moviesOfActiveGenre;
    }
);

