import {moviesMock, activeGenreMock, movieMock} from "../mocks/test-data.js";
import {DEFAULT_GENRE, ActionType} from "../utils/const.js";
import {getAllGenresList} from "../utils/fn.js";
import {reducer} from "./reducer.js";
import {movies} from "../mocks/movies.js";
import {reviews} from "../mocks/reviews.js";
import {promoMovie} from "../mocks/promo-movie.js";
import {promoMovieReviews} from "../mocks/promo-movie-reviews.js";

describe(`Reducer`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      movies,
      activeMovie: null,
      activeGenre: `All genres`,
      allGenres: getAllGenresList(movies),
      maxCountOfVisibleMovies: 8,
      promoMovie,
      promoMovieReviews,
      reviews,
      isVideoPlayerPageOpen: false,
    });
  });

  it(`Reducer change activeGenre`, () => {
    expect(reducer({
      activeGenre: activeGenreMock,
    }, {
      type: ActionType.CHANGE_ACTIVE_GENRE,
      payload: `Genre-1`,
    })).toEqual({
      activeGenre: `Genre-1`,
      maxCountOfVisibleMovies: 8,
    });
  });

  it(`Reducer change activeMovie`, () => {
    expect(reducer({
      activeMovie: activeGenreMock,
    }, {
      type: ActionType.CHANGE_ACTIVE_MOVIE,
      payload: movieMock,
    })).toEqual({
      activeMovie: movieMock,
    });
  });

  it(`Reducer change isVideoPlayerPageOpen - close player`, () => {
    expect(reducer({
      isVideoPlayerPageOpen: true,
    }, {
      type: ActionType.CLOSE_VIDEO_PLAYER_PAGE,
      payload: false,
    })).toEqual({
      isVideoPlayerPageOpen: false,
    });
  });

  it(`Reducer change isVideoPlayerPageOpen - open player`, () => {
    expect(reducer({
      isVideoPlayerPageOpen: false,
    }, {
      type: ActionType.OPEN_VIDEO_PLAYER_PAGE,
      payload: true,
    })).toEqual({
      isVideoPlayerPageOpen: true,
    });
  });

  it(`Reducer change maxCountOfVisibleMovies by button ShowMore`, () => {
    expect(reducer({
      maxCountOfVisibleMovies: 8,
    }, {
      type: ActionType.CHANGE_MAX_COUNT_OF_VISIBLE_MOVIES,
      payload: 8,
    })).toEqual({
      maxCountOfVisibleMovies: 16,
    });
  });

  it(`getAllGenresList return not more 10 items, including "All genres"`, () => {
    expect(reducer({
      activeGenre: DEFAULT_GENRE,
      allGenres: getAllGenresList(moviesMock),
      countMoviesOfActiveGenre: 9,
      maxCountOfVisibleMovies: 8,
      moviesOfActiveGenre: movies,
      promoMovie,
      promoMovieReviews,
      reviews,
    }, {})).toEqual({
      activeGenre: DEFAULT_GENRE,
      allGenres: [`All genres`, `Genre-1`, `Genre-2`, `Genre-4`, `Genre-5`, `Genre-6`, `Genre-7`, `Genre-8`, `Genre-9`, `Genre-10`],
      countMoviesOfActiveGenre: 9,
      maxCountOfVisibleMovies: 8,
      moviesOfActiveGenre: movies,
      promoMovie,
      promoMovieReviews,
      reviews,
    });
  });
});
