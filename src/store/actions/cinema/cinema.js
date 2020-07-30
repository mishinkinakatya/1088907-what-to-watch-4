import {ActionType, INITIAL_COUNT_VISIBLE_MOVIES_ON_MAIN_PAGE} from "../../../utils/const.js";


export const ActionCreator = {
  actionChangeActiveGenre: (newActiveGenre) => {
    return {
      type: ActionType.CHANGE_ACTIVE_GENRE,
      payload: newActiveGenre,
    };
  },
  actionChangeActiveMovie: (newActiveMovie) => {
    return {
      type: ActionType.CHANGE_ACTIVE_MOVIE,
      payload: newActiveMovie,
    };
  },
  actionChangeMaxCountOfVisibleMovies: () => {
    return {
      type: ActionType.CHANGE_MAX_COUNT_OF_VISIBLE_MOVIES,
      payload: INITIAL_COUNT_VISIBLE_MOVIES_ON_MAIN_PAGE,
    };
  },
  actionOpenVideoPlayerPage: () => {
    return {
      type: ActionType.OPEN_VIDEO_PLAYER_PAGE,
      payload: true,
    };
  },
  actionCloseVideoPlayerPage: () => {
    return {
      type: ActionType.CLOSE_VIDEO_PLAYER_PAGE,
      payload: false,
    };
  },
};
