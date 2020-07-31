import NameSpace from "../../name-space.js";
import {createSelector} from "reselect";
import {getMovies} from "../data/selectors.js";
import {DEFAULT_GENRE} from "../../../utils/const.js";


const NAME_SPACE = NameSpace.CINEMA;

export const getActiveMovie = (state) => {
  return state[NAME_SPACE].activeMovie || state[NAME_SPACE].promoMovie;
};

export const getActiveGenre = (state) => {
  return state[NAME_SPACE].activeGenre;
};

export const getIsVideoPlayerPageOpen = (state) => {
  return state[NAME_SPACE].isVideoPlayerPageOpen;
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
