import { combineReducers } from "redux";
import { Action } from "../../types/redux";

const ingredients = (state = [], action: Action) => {
  switch (action.type) {
    case "START":
      return [1, 2, 3];

    default:
      return state;
  }
};

export default combineReducers(ingredients);
