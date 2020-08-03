import {ActionType} from "../../../utils/const.js";

export const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  showAuthorizationError: () => {
    return {
      type: ActionType.CHANGE_STATUS_AUTHORIZATION_ERROR,
      payload: true,
    };
  },
  hideAuthorizationError: () => {
    return {
      type: ActionType.CHANGE_STATUS_AUTHORIZATION_ERROR,
      payload: false,
    };
  },
};
