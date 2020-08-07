import {DEFAULT_GENRE, ActionType, INITIAL_COUNT_VISIBLE_MOVIES_ON_MAIN_PAGE} from "../../../utils/const.js";


const initialState = {
  activeMovie: null,
  activeGenre: DEFAULT_GENRE,
  maxCountOfVisibleMovies: INITIAL_COUNT_VISIBLE_MOVIES_ON_MAIN_PAGE,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_GENRE:
      return Object.assign({}, state, {
        activeGenre: action.payload,
        maxCountOfVisibleMovies: INITIAL_COUNT_VISIBLE_MOVIES_ON_MAIN_PAGE,
      });
    case ActionType.CHANGE_ACTIVE_MOVIE:
      return Object.assign({}, state, {
        activeMovie: action.payload
      });
    case ActionType.CHANGE_MAX_COUNT_OF_VISIBLE_MOVIES:
      return Object.assign({}, state, {
        maxCountOfVisibleMovies: state.maxCountOfVisibleMovies + action.payload
      });
  }
  return state;
};
