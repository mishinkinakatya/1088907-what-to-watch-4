import {moviesMock, activeGenreMock, countMoviesOfActiveGenreMock, countOfVisibleMoviesOnMainPageMock} from "../mocks/test-data.js";
import {DEFAULT_GENRE, ActionType} from "../utils/const.js";
import {getAllGenresList, getMoviesListOfActiveGenre, getIncrementForCountOfVisibleMovies} from "../utils/fn.js";
import {genreReducer} from "./reducer.js";
import {movies} from "../mocks/movies.js";
import {reviews} from "../mocks/reviews.js";
import {promoMovie} from "../mocks/promo-movie.js";
import {promoMovieReviews} from "../mocks/promo-movie-reviews.js";

describe(`genreReducer`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(genreReducer(void 0, {})).toEqual({
      activeGenre: `All genres`,
      allGenres: getAllGenresList(movies),
      countMoviesOfActiveGenre: 9,
      countOfVisibleMoviesOnMainPage: 8,
      moviesOfActiveGenre: movies,
      promoMovie,
      promoMovieReviews,
      reviews,
    });
  });

  it(`Reducer change activeGenre`, () => {
    expect(genreReducer({
      activeGenre: activeGenreMock,
    }, {
      type: ActionType.CHANGE_ACTIVE_GENRE,
      payload: `Genre-1`,
    })).toEqual({
      activeGenre: `Genre-1`,
    });
  });

  it(`Reducer change moviesOfActiveGenre`, () => {
    expect(genreReducer({
      activeGenre: activeGenreMock,
    }, {
      type: ActionType.GET_MOVIES_LIST_OF_ACTIVE_GENRE,
      payload: getMoviesListOfActiveGenre(moviesMock, activeGenreMock),
    })).toEqual({
      activeGenre: activeGenreMock,
      moviesOfActiveGenre: activeGenreMock === DEFAULT_GENRE ? moviesMock : moviesMock.filter((movie) => movie.genre === activeGenreMock),
    });
  });

  it(`Reducer change countMoviesOfActiveGenre`, () => {
    expect(genreReducer({
      activeGenre: activeGenreMock,
    }, {
      type: ActionType.GET_COUNT_MOVIES_OF_ACTIVE_GENRE,
      payload: getMoviesListOfActiveGenre(moviesMock, activeGenreMock).length,
    })).toEqual({
      activeGenre: activeGenreMock,
      countMoviesOfActiveGenre: 1,
    });
  });

  it(`Reducer change countOfVisibleMoviesOnMainPage`, () => {
    expect(genreReducer({
      activeGenre: activeGenreMock,
    }, {
      type: ActionType.GET_COUNT_OF_VISIBLE_MOVIES,
      payload: getMoviesListOfActiveGenre(moviesMock, activeGenreMock).length,
    })).toEqual({
      activeGenre: activeGenreMock,
      countOfVisibleMoviesOnMainPage: 1,
    });
  });

  it(`Reducer change countOfVisibleMoviesOnMainPage by button ShowMore`, () => {
    expect(genreReducer({
      countMoviesOfActiveGenre: countMoviesOfActiveGenreMock,
      countOfVisibleMoviesOnMainPage: countOfVisibleMoviesOnMainPageMock,
    }, {
      type: ActionType.INCREMENT_COUNT_OF_VISIBLE_MOVIES,
      payload: getIncrementForCountOfVisibleMovies(countMoviesOfActiveGenreMock, countOfVisibleMoviesOnMainPageMock),
    })).toEqual({
      countMoviesOfActiveGenre: 11,
      countOfVisibleMoviesOnMainPage: 11,
    });
  });

  it(`Reducer return all movies if activeGenre is "All genres"`, () => {
    expect(genreReducer({
      activeGenre: `All genres`,
    }, {
      type: ActionType.GET_MOVIES_LIST_OF_ACTIVE_GENRE,
      payload: getMoviesListOfActiveGenre(moviesMock, `All genres`),
    })).toEqual({
      activeGenre: `All genres`,
      moviesOfActiveGenre: `All genres` === DEFAULT_GENRE ? moviesMock : moviesMock.filter((movie) => movie.genre === `All genres`),
    });
  });

  it(`getAllGenresList return not more 10 items, including "All genres"`, () => {
    expect(genreReducer({
      activeGenre: DEFAULT_GENRE,
      allGenres: getAllGenresList(moviesMock),
      countMoviesOfActiveGenre: 9,
      countOfVisibleMoviesOnMainPage: 8,
      moviesOfActiveGenre: movies,
      promoMovie,
      promoMovieReviews,
      reviews,
    }, {})).toEqual({
      activeGenre: DEFAULT_GENRE,
      allGenres: [`All genres`, `Genre-1`, `Genre-2`, `Genre-4`, `Genre-5`, `Genre-6`, `Genre-7`, `Genre-8`, `Genre-9`, `Genre-10`],
      countMoviesOfActiveGenre: 9,
      countOfVisibleMoviesOnMainPage: 8,
      moviesOfActiveGenre: movies,
      promoMovie,
      promoMovieReviews,
      reviews,
    });
  });
});
