import {ActionType, AuthorizationStatus} from "../../../utils/const.js";
import {ActionCreator} from "../../actions/user/user.js";


const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

export const Operations = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
    .then(() => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch((err) => {
      throw err;
    });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
    .then(() => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    });
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
  }
  return state;
};
