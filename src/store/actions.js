import {movies} from "../mocks/movies.js";
import {ActionType} from "../utils/const.js";
import {getMoviesListOfActiveGenre} from "../utils/fn.js";


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
      payload: getMoviesListOfActiveGenre(movies, newActiveGenre),
    };
  },
};
