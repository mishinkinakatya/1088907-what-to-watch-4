import {ActionType} from "../utils/const.js";
import {getIncrementForCountOfVisibleMovies} from "../utils/fn.js";


export const ActionCreator = {
  actionChangeActiveGenre: (newActiveGenre) => {
    return {
      type: ActionType.CHANGE_ACTIVE_GENRE,
      payload: newActiveGenre,
    };
  },
  actionIncrementCountOfVisibleMovies: (countMoviesOfActiveGenre, countOfVisibleMoviesOnMainPage) => {
    return {
      type: ActionType.INCREMENT_COUNT_OF_VISIBLE_MOVIES,
      payload: getIncrementForCountOfVisibleMovies(countMoviesOfActiveGenre, countOfVisibleMoviesOnMainPage),
    };
  },
};
