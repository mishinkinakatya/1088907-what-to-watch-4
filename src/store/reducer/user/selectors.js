import NameSpace from "../../name-space.js";
import {AuthorizationStatus} from "../../../utils/const.js";


const NAME_SPACE = NameSpace.USER;

export const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

export const isAuth = (state) => {
  return state[NAME_SPACE].authorizationStatus === AuthorizationStatus.AUTH;
};

export const getIsAuthorizationError = (state) => {
  return state[NAME_SPACE].isAuthorizationError;
};

export const getAuthInfo = (state) => {
  return state[NAME_SPACE].authInfo;
};
