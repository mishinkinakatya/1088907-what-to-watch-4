import {ActionType} from "../../../utils/const.js";


export const ActionCreator = {
  actionLoadMovies: (movies) => {
    return {
      type: ActionType.LOAD_MOVIES,
      payload: movies,
    };
  },
  actionLoadReviews: (reviews) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };
  },
  actionLoadPromoMovie: (promoMovie) => {
    return {
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: promoMovie,
    };
  },
};
