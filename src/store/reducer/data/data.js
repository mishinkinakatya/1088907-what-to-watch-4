import React from "react";
import {Redirect} from "react-router-dom";
import {ActionCreator} from "../../actions/data/data.js";
import {createMovie, createReview} from "../../../adapters/adapters.js";
import {ActionType, SendingStatus, AppRoute, LoadingStatus} from "../../../utils/const.js";


const initialState = {
  movies: [],
  promoMovie: null,
  reviews: [],
  favoriteMovies: [],
  addReviewStatus: SendingStatus.NO_SENDING,
  loadingStatus: LoadingStatus.LOADING,
};

export const Operations = {
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
    .then((response) => {
      dispatch(ActionCreator.loadMovies(response.data.map(createMovie)));
      dispatch(ActionCreator.changeLoadingStatus(LoadingStatus.SUCCESS));
    })
    .catch(() => {
      dispatch(ActionCreator.changeLoadingStatus(LoadingStatus.FAIL));
    });
  },
  loadReviews: (movieId) => (dispatch, getState, api) => {
    return api.get(`/comments/${movieId}`)
    .then((response) => {
      dispatch(ActionCreator.loadReviews(response.data.map(createReview)));
    })
    .catch(() => {
      dispatch(ActionCreator.changeLoadingStatus(LoadingStatus.FAIL));
    });
  },
  loadPromoMovie: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
    .then((response) => {
      dispatch(ActionCreator.loadPromoMovie(createMovie(response.data)));
    })
    .catch(() => {
      dispatch(ActionCreator.changeLoadingStatus(LoadingStatus.FAIL));
    });
  },
  loadFaforite: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
    .then((response) => {
      dispatch(ActionCreator.loadFaforite(response.data.map(createMovie)));
    })
    .catch(() => {
      dispatch(ActionCreator.changeLoadingStatus(LoadingStatus.FAIL));
    });
  },
  postReview: (movieId, reviewData) => (dispatch, getState, api) => {
    dispatch(ActionCreator.changeStatusOfSendingReview(SendingStatus.SENDING));
    return api.post(`comments/${movieId}`, {
      rating: reviewData.ratingScore,
      comment: reviewData.comment,
    })
    .then(() => {
      dispatch(ActionCreator.changeStatusOfSendingReview(SendingStatus.SUCCESS));
    })
    .then(() => {
      return (
        <Redirect to={{
          path: `${AppRoute.MOVIE_PAGE}/:${movieId}`,
          state: {form: location}
        }} />
      );
    })
    .catch(() => {
      dispatch(ActionCreator.changeStatusOfSendingReview(SendingStatus.FAIL));
    });
  },
  postFavoriteStatusMovie: (movie, status) => (dispatch, getState, api) => {
    return api.post(`favorite/${movie.id}/${status ? 1 : 0}`, {
      movie,
    })
    .then((response) => {
      dispatch(ActionCreator.loadFaforite(response.data.map(createMovie)));
      dispatch(ActionCreator.loadMovies(response.data.map(createMovie)));
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
    case ActionType.LOAD_FAVORITE:
      return Object.assign({}, state, {
        favoriteMovies: action.payload,
      });
    case ActionType.CHANGE_STATUS_OF_SENDING_REVIEW:
      return Object.assign({}, state, {
        addReviewStatus: action.payload,
      });
    case ActionType.CHANGE_STATUS_OF_ERROR_PAGE:
      return Object.assign({}, state, {
        loadingStatus: action.payload,
      });
  }
  return state;
};
