import {DEFAULT_GENRE, ActionType, INITIAL_COUNT_VISIBLE_MOVIES_ON_MAIN_PAGE} from "../utils/const.js";
import {getAllGenresList} from "../utils/fn.js";
import {movies} from "../mocks/movies.js";
import {reviews} from "../mocks/reviews.js";
import {promoMovie} from "../mocks/promo-movie.js";
import {promoMovieReviews} from "../mocks/promo-movie-reviews.js";


const initialState = {
  activeGenre: DEFAULT_GENRE,
  allGenres: getAllGenresList(movies),
  countMoviesOfActiveGenre: movies.length,
  countOfVisibleMoviesOnMainPage: movies.length > INITIAL_COUNT_VISIBLE_MOVIES_ON_MAIN_PAGE ? INITIAL_COUNT_VISIBLE_MOVIES_ON_MAIN_PAGE : movies.length,
  moviesOfActiveGenre: movies,
  promoMovie,
  promoMovieReviews,
  reviews,
};

export const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_GENRE:
      return Object.assign({}, state, {activeGenre: action.payload});
    case ActionType.GET_MOVIES_LIST_OF_ACTIVE_GENRE:
      return Object.assign({}, state, {moviesOfActiveGenre: action.payload});
    case ActionType.GET_COUNT_MOVIES_OF_ACTIVE_GENRE:
      return Object.assign({}, state, {countMoviesOfActiveGenre: action.payload});
    case ActionType.GET_COUNT_OF_VISIBLE_MOVIES:
      return Object.assign({}, state, {countOfVisibleMoviesOnMainPage: action.payload > INITIAL_COUNT_VISIBLE_MOVIES_ON_MAIN_PAGE ? INITIAL_COUNT_VISIBLE_MOVIES_ON_MAIN_PAGE : action.payload});
    case ActionType.INCREMENT_COUNT_OF_VISIBLE_MOVIES:
      return Object.assign({}, state, {countOfVisibleMoviesOnMainPage: state.countOfVisibleMoviesOnMainPage + action.payload});
  }
  return state;
};
