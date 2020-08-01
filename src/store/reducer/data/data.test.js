import {reducer} from "./data.js";

describe(`DataReducer`, () => {
  it(`DataReducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      movies: [],
      promoMovie: null,
      reviews: [],
    });
  });

  // TODO! Надо это тестировать в другом месте
  // it(`getAllGenresList return not more 10 items, including "All genres"`, () => {
  //   expect(reducer({
  //     activeGenre: DEFAULT_GENRE,
  //     allGenres: getAllGenresList(moviesMock),
  //     countMoviesOfActiveGenre: 9,
  //     maxCountOfVisibleMovies: 8,
  //     moviesOfActiveGenre: movies,
  //     promoMovie,
  //     promoMovieReviews,
  //     reviews,
  //   }, {})).toEqual({
  //     activeGenre: DEFAULT_GENRE,
  //     allGenres: [`All genres`, `Genre-1`, `Genre-2`, `Genre-4`, `Genre-5`, `Genre-6`, `Genre-7`, `Genre-8`, `Genre-9`, `Genre-10`],
  //     countMoviesOfActiveGenre: 9,
  //     maxCountOfVisibleMovies: 8,
  //     moviesOfActiveGenre: movies,
  //     promoMovie,
  //     promoMovieReviews,
  //     reviews,
  //   });
  // });
});
