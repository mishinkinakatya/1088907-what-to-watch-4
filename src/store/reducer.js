import {DEFAULT_GENRE, ActionType} from "../utils/const.js";
import {movies} from "../mocks/movies.js";
import {reviews} from "../mocks/reviews.js";
import {promoMovie} from "../mocks/promo-movie.js";
import {promoMovieReviews} from "../mocks/promo-movie-reviews.js";


const getAllGenresList = (allMovies) => {
  const allGenres = [DEFAULT_GENRE].concat(Array.from(new Set(allMovies.map((movie) => movie.genre))));
  return allGenres.length > 10 ? allGenres.slice(0, 10) : allGenres;
};

const initialState = {
  promoMovie,
  promoMovieReviews,
  allGenres: getAllGenresList(movies),
  activeGenre: DEFAULT_GENRE,
  moviesOfActiveGenre: movies,
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
