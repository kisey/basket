import { CATEGORY_TYPE } from "../types/recipe";
import { Action } from "../../types/redux";
import { SELECT_CATEGORY } from "../constants/category";

const category = (state: CATEGORY_TYPE = null, action: Action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return action.payload.category;

    default:
      return state;
  }
};

export default category;
