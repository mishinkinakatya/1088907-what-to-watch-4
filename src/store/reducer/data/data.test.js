import MockAdapter from 'axios-mock-adapter';
import {reducer, Operations} from "./data.js";
import {createAPI} from '../../../api';
import {ActionType} from '../../../utils/const.js';
import {promoMovieMock, moviesMock, reviewsMock, reviewMock} from '../../../mocks/test-data.js';
import {createMovie} from '../../../adapters/adapters.js';


const api = createAPI(() => {});

describe(`DataReducer`, () => {
  it(`DataReducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      movies: [],
      promoMovie: null,
      reviews: [],
      favoriteMovies: [],
      addReviewStatus: `NO_SENDING`,
      sendFavotiteStatus: `NO_SENDING`,
      textOfError: null,
    });
  });

  it(`DataReducer update movies by load`, () => {
    expect(reducer({
      movies: [],
    }, {
      type: ActionType.LOAD_MOVIES,
      payload: moviesMock,
    })).toEqual({
      movies: moviesMock,
    });
  });

  it(`DataReducer update reviews by load`, () => {
    expect(reducer({
      reviews: [],
    }, {
      type: ActionType.LOAD_REVIEWS,
      payload: reviewsMock,
    })).toEqual({
      reviews: reviewsMock,
    });
  });

  it(`DataReducer update promoMovie by load`, () => {
    expect(reducer({
      promoMovie: null,
    }, {
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: promoMovieMock,
    })).toEqual({
      promoMovie: promoMovieMock,
    });
  });

  it(`DataReducer update favouriteMovies by load`, () => {
    expect(reducer({
      favoriteMovies: [],
    }, {
      type: ActionType.LOAD_FAVORITE,
      payload: moviesMock,
    })).toEqual({
      favoriteMovies: moviesMock,
    });
  });

  it(`DataReducer update addReviewStatus`, () => {
    expect(reducer({
      addReviewStatus: `NO_SENDING`,
    }, {
      type: ActionType.CHANGE_STATUS_OF_SENDING_REVIEW,
      payload: `SUCCESS`,
    })).toEqual({
      addReviewStatus: `SUCCESS`,
    });
  });

  it(`DataReducer update sendFavotiteStatus`, () => {
    expect(reducer({
      sendFavotiteStatus: `NO_SENDING`,
    }, {
      type: ActionType.CHANGE_SEND_FAVORITE_STATUS,
      payload: `SUCCESS`,
    })).toEqual({
      sendFavotiteStatus: `SUCCESS`,
    });
  });

  it(`DataReducer catch error and save text of error`, () => {
    expect(reducer({
      textOfError: null,
    }, {
      type: ActionType.SHOW_LOAD_ERROR,
      payload: `Text of error`,
    })).toEqual({
      textOfError: `Text of error`,
    });
  });

  it(`Should make a correct API call to /films`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const moviesLoader = Operations.loadMovies();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return moviesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.LOAD_MOVIES,
          payload: [createMovie({fake: true})],
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoMoviesLoader = Operations.loadPromoMovie();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, [{fake: true}]);

    return promoMoviesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.LOAD_PROMO_MOVIE,
          payload: createMovie({fake: true}),
        });
      });
  });

  it(`Should make a correct API call to /comments/1`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewSending = Operations.postReview(1, reviewMock);

    apiMock
      .onPost(`/comments/1`)
      .reply(200, [{fake: true}]);

    return reviewSending(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.CHANGE_STATUS_OF_SENDING_REVIEW,
          payload: `SUCCESS`,
        });
      });
  });

});
