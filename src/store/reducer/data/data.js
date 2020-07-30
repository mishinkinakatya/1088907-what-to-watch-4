import {ActionType} from "../../../utils/const.js";
import {ActionCreator} from "../../actions/data/data.js";
import {createMovie} from "../../../adapters/movies.js";
import {createReview} from "../../../adapters/reviews.js";


const initialState = {
  movies: [],
  promoMovie: null,
  reviews: [],
};

export const Operations = {
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
    .then((response) => {
      dispatch(ActionCreator.actionLoadMovies(response.data.map(createMovie)));
    });
  },
  loadReviews: (movieId) => (dispatch, getState, api) => {
    return api.get(`/comments/${movieId}`)
    .then((response) => {
      dispatch(ActionCreator.actionLoadReviews(createReview(response.data)));
    });
  },
  loadPromoMovie: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
    .then((response) => {
      dispatch(ActionCreator.actionLoadPromoMovie(createMovie(response.data)));
    });
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return Object.assign({}, state, {
        movies: action.payload,
      });
    case ActionType.LOAD_REVIEWS:
      return Object.assign({}, state, {
        reviews: action.payload,
      });
    case ActionType.LOAD_PROMO_MOVIE:
      return Object.assign({}, state, {
        promoMovie: action.payload,
      });
  }
  return state;
};
