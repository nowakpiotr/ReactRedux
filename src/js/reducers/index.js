import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import colorReducer from "./colorReducer";

export default combineReducers({
  articles: articleReducer,
  color: colorReducer
});
