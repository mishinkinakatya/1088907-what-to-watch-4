import {DEFAULT_GENRE, ActionType} from "../utils/const.js";
import {getAllGenresList} from "../utils/fn.js";
import {movies} from "../mocks/movies.js";
import {reviews} from "../mocks/reviews.js";
import {promoMovie} from "../mocks/promo-movie.js";
import {promoMovieReviews} from "../mocks/promo-movie-reviews.js";


const initialState = {
  activeGenre: DEFAULT_GENRE,
  allGenres: getAllGenresList(movies),
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
  }
  return state;
};
