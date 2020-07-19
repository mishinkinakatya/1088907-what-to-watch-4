import {DEFAULT_GENRE, ActionType, INITIAL_COUNT_VISIBLE_MOVIES_ON_MAIN_PAGE} from "../utils/const.js";
import {getAllGenresList} from "../utils/fn.js";
import {movies} from "../mocks/movies.js";
import {reviews} from "../mocks/reviews.js";
import {promoMovie} from "../mocks/promo-movie.js";
import {promoMovieReviews} from "../mocks/promo-movie-reviews.js";


const initialState = {
  movies,
  activeGenre: DEFAULT_GENRE,
  allGenres: getAllGenresList(movies),
  maxCountOfVisibleMovies: movies.length > INITIAL_COUNT_VISIBLE_MOVIES_ON_MAIN_PAGE ? INITIAL_COUNT_VISIBLE_MOVIES_ON_MAIN_PAGE : movies.length,
  promoMovie,
  promoMovieReviews,
  reviews,
};

export const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_GENRE:
      return Object.assign({}, state, {
        activeGenre: action.payload,
        maxCountOfVisibleMovies: movies.length > INITIAL_COUNT_VISIBLE_MOVIES_ON_MAIN_PAGE ? INITIAL_COUNT_VISIBLE_MOVIES_ON_MAIN_PAGE : movies.length,
      });
    case ActionType.CHANGE_MAX_COUNT_OF_VISIBLE_MOVIES:
      return Object.assign({}, state, {
        maxCountOfVisibleMovies: state.maxCountOfVisibleMovies + action.payload
      });
  }
  return state;
};
