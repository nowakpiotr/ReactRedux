import { CHANGE_COLOR } from "../constants/action-types";
import axios from "axios";

export function loadColor() {
  return dispatch => {
    return axios
      .get("https://next.json-generator.com/api/json/get/N1RvZku7H", {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json"
        }
      })
      .then(response => {
        dispatch(changeColor("#" + response.data.new_color));
      });
  };
}

export function changeColor(color) {
  console.log(color);
  return {
    type: CHANGE_COLOR,
    color: color
  };
}
