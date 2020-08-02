import {combineReducers} from "redux";
import {reducer as data} from "./reducer/data/data.js";
import {reducer as cinema} from "./reducer/cinema/cinema.js";
import NameSpace from "./name-space.js";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.CINEMA]: cinema,
});
