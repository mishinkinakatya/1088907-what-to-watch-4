import {ActionType} from "../../../utils/const.js";
import {ActionCreator} from "../../actions/data/data.js";
import {createMovie, createReview} from "../../../adapters/adapters.js";


const initialState = {
  movies: [],
  promoMovie: null,
  reviews: [],
};

export const Operations = {
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
    .then((response) => {
      dispatch(ActionCreator.loadMovies(response.data.map(createMovie)));
    });
  },
  loadReviews: (movieId) => (dispatch, getState, api) => {
    return api.get(`/comments/${movieId}`)
    .then((response) => {
      dispatch(ActionCreator.loadReviews(response.data.map(createReview)));
    });
  },
  loadPromoMovie: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
    .then((response) => {
      dispatch(ActionCreator.loadPromoMovie(createMovie(response.data)));
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