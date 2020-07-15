import {DEFAULT_GENRE, ActionType} from "../utils/const.js";
import {movies} from "../mocks/movies.js";


const getMoviesListOfActiveGenre = (activeGenre) => {
  return activeGenre === DEFAULT_GENRE ? movies : movies.filter((movie) => movie.genre === activeGenre);
};

export const ActionCreator = {
  actionChangeActiveGenre: (newActiveGenre) => {
    return {
      type: ActionType.CHANGE_ACTIVE_GENRE,
      payload: newActiveGenre,
    };
  },
  actionGetMoviesListOfActiveGenre: (newActiveGenre) => {
    return {
      type: ActionType.GET_MOVIES_LIST_OF_ACTIVE_GENRE,
      payload: getMoviesListOfActiveGenre(newActiveGenre),
    };
  },
};
