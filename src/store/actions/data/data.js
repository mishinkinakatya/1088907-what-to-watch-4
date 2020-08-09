import {ActionType} from "../../../utils/const.js";


export const ActionCreator = {
  loadMovies: (movies) => {
    return {
      type: ActionType.LOAD_MOVIES,
      payload: movies,
    };
  },
  loadReviews: (reviews) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };
  },
  loadPromoMovie: (promoMovie) => {
    return {
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: promoMovie,
    };
  },
  loadFaforite: (favouriteMovies) => {
    return {
      type: ActionType.LOAD_FAVORITE,
      payload: favouriteMovies,
    };
  },
  changeStatusOfSendingReview: (status) => {
    return {
      type: ActionType.CHANGE_STATUS_OF_SENDING_REVIEW,
      payload: status,
    };
  },
  changeSendFavoriteStatus: (status) => {
    return {
      type: ActionType.CHANGE_SEND_FAVORITE_STATUS,
      payload: status,
    };
  },
  changeLoadFavoriteStatus: (status) => {
    return {
      type: ActionType.CHANGE_LOAD_FAVORITE_STATUS,
      payload: status,
    };
  },
  showLoadError: (err) => {
    return {
      type: ActionType.SHOW_LOAD_ERROR,
      payload: err,
    };
  },
};
