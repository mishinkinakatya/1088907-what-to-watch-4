import React from "react";
import {Redirect} from "react-router-dom";
import {ActionCreator} from "../../actions/user/user.js";
import {createAuthInfo} from "../../../adapters/adapters.js";
import {ActionType, AuthorizationStatus, AppRoute} from "../../../utils/const.js";


const initialState = {
  authInfo: null,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isAuthorizationError: false,
};

export const Operations = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.changeAuthInfo(createAuthInfo(response.data)));
      })
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .then(() => {
        return (
          <Redirect to={{
            path: AppRoute.MAIN_PAGE,
            state: {form: location}
          }} />
        );
      })
      .catch(() => {
        dispatch(ActionCreator.showAuthorizationError());
      });
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
    case ActionType.CHANGE_STATUS_AUTHORIZATION_ERROR:
      return Object.assign({}, state, {
        isAuthorizationError: action.payload,
      });
    case ActionType.CHANGE_AUTH_INFO:
      return Object.assign({}, state, {
        authInfo: action.payload,
      });
  }

  return state;
};
