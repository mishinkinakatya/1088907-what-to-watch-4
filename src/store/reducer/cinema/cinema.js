import {DEFAULT_GENRE, ActionType, INITIAL_COUNT_VISIBLE_MOVIES_ON_MAIN_PAGE} from "../../../utils/const.js";


const initialState = {
  activeMovie: null,
  activeGenre: DEFAULT_GENRE,
  maxCountOfVisibleMovies: INITIAL_COUNT_VISIBLE_MOVIES_ON_MAIN_PAGE,
  isVideoPlayerPageOpen: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_GENRE:
      return Object.assign({}, state, {
        activeGenre: action.payload,
        maxCountOfVisibleMovies: state.maxCountOfVisibleMovies,
      });
    case ActionType.CHANGE_ACTIVE_MOVIE:
      return Object.assign({}, state, {
        activeMovie: action.payload
      });
    case ActionType.CHANGE_MAX_COUNT_OF_VISIBLE_MOVIES:
      return Object.assign({}, state, {
        maxCountOfVisibleMovies: state.maxCountOfVisibleMovies + action.payload
      });
    case ActionType.CHANGE_STATUS_VIDEO_PLAYER_PAGE:
      return Object.assign({}, state, {
        isVideoPlayerPageOpen: action.payload,
      });
  }
  return state;
};
