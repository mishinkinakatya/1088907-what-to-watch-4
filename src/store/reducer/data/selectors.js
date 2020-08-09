import {createSelector} from "reselect";
import NameSpace from "../../name-space.js";
import {DEFAULT_GENRE} from "../../../utils/const.js";


const NAME_SPACE = NameSpace.DATA;
const COUNT_OF_VISIBLE_GENRES = 10;

export const getMovies = (state) => {
  return state[NAME_SPACE].movies;
};

export const getReviews = (state) => {
  return state[NAME_SPACE].reviews;
};

export const getPromoMovie = (state) => {
  return state[NAME_SPACE].promoMovie;
};

export const getFavoriteMovies = (state) => {
  return state[NAME_SPACE].favoriteMovies;
};

export const getAddReviewStatus = (state) => {
  return state[NAME_SPACE].addReviewStatus;
};

export const getSendFavotiteStatus = (state) => {
  return state[NAME_SPACE].sendFavotiteStatus;
};

export const getIsLoadError = (state) => {
  return state[NAME_SPACE].isLoadError;
};

export const getAllGenres = createSelector(
    getMovies,
    (movies) => {
      const allGenres = [DEFAULT_GENRE].concat(Array.from(new Set(movies.map((movie) => movie.genre))));
      return allGenres.length > COUNT_OF_VISIBLE_GENRES ? allGenres.slice(0, COUNT_OF_VISIBLE_GENRES) : allGenres;
    });
