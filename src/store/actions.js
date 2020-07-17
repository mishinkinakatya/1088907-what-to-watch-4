import {movies} from "../mocks/movies.js";
import {ActionType} from "../utils/const.js";
import {getMoviesListOfActiveGenre, getIncrementForCountOfVisibleMovies} from "../utils/fn.js";


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
  actionGetCountMoviesOfActiveGenre: (newActiveGenre) => {
    return {
      type: ActionType.GET_COUNT_MOVIES_OF_ACTIVE_GENRE,
      payload: getMoviesListOfActiveGenre(movies, newActiveGenre).length,
    };
  },
  actionGetCountOfVisibleMovies: (newActiveGenre) => {
    return {
      type: ActionType.GET_COUNT_OF_VISIBLE_MOVIES,
      payload: getMoviesListOfActiveGenre(movies, newActiveGenre).length,
    };
  },
  actionIncrementCountOfVisibleMovies: (countMoviesOfActiveGenre, countOfVisibleMoviesOnMainPage) => {
    return {
      type: ActionType.INCREMENT_COUNT_OF_VISIBLE_MOVIES,
      payload: getIncrementForCountOfVisibleMovies(countMoviesOfActiveGenre, countOfVisibleMoviesOnMainPage),
    };
  },
};
