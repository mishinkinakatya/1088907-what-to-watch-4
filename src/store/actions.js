import {ActionType, INITIAL_COUNT_VISIBLE_MOVIES_ON_MAIN_PAGE} from "../utils/const.js";


export const ActionCreator = {
  actionChangeActiveGenre: (newActiveGenre) => {
    return {
      type: ActionType.CHANGE_ACTIVE_GENRE,
      payload: newActiveGenre,
    };
  },
  actionChangeMaxCountOfVisibleMovies: () => {
    return {
      type: ActionType.CHANGE_MAX_COUNT_OF_VISIBLE_MOVIES,
      payload: INITIAL_COUNT_VISIBLE_MOVIES_ON_MAIN_PAGE,
    };
  },
};
