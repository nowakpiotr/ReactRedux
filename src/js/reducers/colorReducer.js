import { CHANGE_COLOR } from "../constants/action-types";

let defaultState = {
  color: "red"
};

const colorReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_COLOR:
      return {
        ...state,
        color: action.color
      };
    default:
      return state;
  }
};
export default colorReducer;
