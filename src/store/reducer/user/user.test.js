import MockAdapter from 'axios-mock-adapter';
import {reducer, Operations} from "./user.js";
import {createAPI} from '../../../api';
import {ActionType} from '../../../utils/const.js';
import {authInfoMock} from '../../../mocks/test-data.js';


const api = createAPI(() => {});

describe(`UserReducer`, () => {
  it(`UserReducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      authInfo: null,
      authorizationStatus: `NO_AUTH`,
      isAuthorizationError: false,
    });
  });

  it(`UserReducer update authInfo by load`, () => {
    expect(reducer({
      authInfo: null,
    }, {
      type: ActionType.CHANGE_AUTH_INFO,
      payload: authInfoMock,
    })).toEqual({
      authInfo: authInfoMock,
    });
  });

  it(`UserReducer update authorizationStatus by load`, () => {
    expect(reducer({
      authorizationStatus: `NO_AUTH`,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `AUTH`,
    })).toEqual({
      authorizationStatus: `AUTH`,
    });
  });

  it(`UserReducer catch authorization error`, () => {
    expect(reducer({
      isAuthorizationError: false,
    }, {
      type: ActionType.CHANGE_STATUS_AUTHORIZATION_ERROR,
      payload: true,
    })).toEqual({
      isAuthorizationError: true,
    });
  });


  it(`Should make a correct API call to /login`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthorization = Operations.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, [{fake: true}]);

    return checkAuthorization(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: `AUTH`,
        });
      });
  });
});
