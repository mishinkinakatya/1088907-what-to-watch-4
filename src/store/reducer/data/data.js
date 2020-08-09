import {ActionCreator} from "../../actions/data/data.js";
import {createMovie, createReview} from "../../../adapters/adapters.js";
import {ActionType, SendingStatus} from "../../../utils/const.js";


const initialState = {
  movies: [],
  promoMovie: null,
  reviews: [],
  favoriteMovies: [],
  addReviewStatus: SendingStatus.NO_SENDING,
  sendFavotiteStatus: SendingStatus.NO_SENDING,
  textOfError: null,
};

export const Operations = {
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
    .then((response) => {
      dispatch(ActionCreator.loadMovies(response.data.map(createMovie)));
    })
    .catch((err) => {
      dispatch(ActionCreator.showLoadError(err.message));
    });
  },
  loadReviews: (movieId) => (dispatch, getState, api) => {
    return api.get(`/comments/${movieId}`)
    .then((response) => {
      dispatch(ActionCreator.loadReviews(response.data.map(createReview)));
    })
    .catch((err) => {
      dispatch(ActionCreator.showLoadError(err.message));
    });
  },
  loadPromoMovie: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
    .then((response) => {
      dispatch(ActionCreator.loadPromoMovie(createMovie(response.data)));
    })
    .catch((err) => {
      dispatch(ActionCreator.showLoadError(err.message));
    });
  },
  loadFaforite: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
    .then((response) => {
      dispatch(ActionCreator.loadFaforite(response.data.map(createMovie)));
    })
    .catch((err) => {
      dispatch(ActionCreator.showLoadError(err.message));
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
    .catch(() => {
      dispatch(ActionCreator.changeStatusOfSendingReview(SendingStatus.FAIL));
    });
  },
  postFavoriteStatusMovie: (movie, status) => (dispatch, getState, api) => {
    dispatch(ActionCreator.changeSendFavoriteStatus(SendingStatus.SENDING));
    return api.post(`favorite/${movie.id}/${status ? 1 : 0}`, {
      movie,
    })
    .then(() => {
      dispatch(ActionCreator.changeSendFavoriteStatus(SendingStatus.SUCCESS));
    })
    .catch(() => {
      dispatch(ActionCreator.changeSendFavoriteStatus(SendingStatus.FAIL));
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
    case ActionType.CHANGE_SEND_FAVORITE_STATUS:
      return Object.assign({}, state, {
        sendFavotiteStatus: action.payload,
      });
    case ActionType.SHOW_LOAD_ERROR:
      return Object.assign({}, state, {
        textOfError: action.payload,
      });
  }
  return state;
};
