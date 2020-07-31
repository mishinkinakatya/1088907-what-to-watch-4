import {ActionType, INITIAL_COUNT_VISIBLE_MOVIES_ON_MAIN_PAGE} from "../../../utils/const.js";


export const ActionCreator = {
  changeActiveGenre: (newActiveGenre) => {
    return {
      type: ActionType.CHANGE_ACTIVE_GENRE,
      payload: newActiveGenre,
    };
  },
  changeActiveMovie: (newActiveMovie) => {
    return {
      type: ActionType.CHANGE_ACTIVE_MOVIE,
      payload: newActiveMovie,
    };
  },
  changeMaxCountOfVisibleMovies: () => {
    return {
      type: ActionType.CHANGE_MAX_COUNT_OF_VISIBLE_MOVIES,
      payload: INITIAL_COUNT_VISIBLE_MOVIES_ON_MAIN_PAGE,
    };
  },
  openVideoPlayerPage: () => {
    return {
      type: ActionType.CHANGE_STATUS_VIDEO_PLAYER_PAGE,
      payload: true,
    };
  },
  closeVideoPlayerPage: () => {
    return {
      type: ActionType.CHANGE_STATUS_VIDEO_PLAYER_PAGE,
      payload: false,
    };
  },
};
