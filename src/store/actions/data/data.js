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
  changeLoadingStatus: (status) => {
    return {
      type: ActionType.CHANGE_STATUS_OF_ERROR_PAGE,
      payload: status,
    };
  },
};
