import {reducer} from "./cinema.js";
import {activeGenreMock} from "../../../mocks/test-data.js";
import {ActionType} from "../../../utils/const.js";

describe(`CinemaReducer`, () => {
  it(`CinemaReducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      activeGenre: `All genres`,
      maxCountOfVisibleMovies: 8,
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
