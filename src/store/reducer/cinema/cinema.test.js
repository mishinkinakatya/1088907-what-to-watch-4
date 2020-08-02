import {reducer} from "./cinema.js";
import {activeGenreMock, movieMock} from "../../../mocks/test-data.js";
import {ActionType} from "../../../utils/const.js";

describe(`CinemaReducer`, () => {
  it(`CinemaReducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      activeMovie: null,
      activeGenre: `All genres`,
      maxCountOfVisibleMovies: 8,
      isVideoPlayerPageOpen: false,
    });
  });

  it(`CinemaReducer change activeGenre`, () => {
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

  it(`CinemaReducer change activeMovie`, () => {
    expect(reducer({
      activeMovie: activeGenreMock,
    }, {
      type: ActionType.CHANGE_ACTIVE_MOVIE,
      payload: movieMock,
    })).toEqual({
      activeMovie: movieMock,
    });
  });

  it(`CinemaReducer change isVideoPlayerPageOpen - close player`, () => {
    expect(reducer({
      isVideoPlayerPageOpen: true,
    }, {
      type: ActionType.CHANGE_STATUS_VIDEO_PLAYER_PAGE,
      payload: false,
    })).toEqual({
      isVideoPlayerPageOpen: false,
    });
  });

  it(`CinemaReducer change isVideoPlayerPageOpen - open player`, () => {
    expect(reducer({
      isVideoPlayerPageOpen: false,
    }, {
      type: ActionType.CHANGE_STATUS_VIDEO_PLAYER_PAGE,
      payload: true,
    })).toEqual({
      isVideoPlayerPageOpen: true,
    });
  });

  it(`CinemaReducer change maxCountOfVisibleMovies by button ShowMore`, () => {
    expect(reducer({
      maxCountOfVisibleMovies: 8,
    }, {
      type: ActionType.CHANGE_MAX_COUNT_OF_VISIBLE_MOVIES,
      payload: 8,
    })).toEqual({
      maxCountOfVisibleMovies: 16,
    });
  });
});
