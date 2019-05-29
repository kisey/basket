import { Action } from "../../../types/redux";
import { SELECT_CATEGORY, CATEGORY_TYPE } from "../constants/category";

const category = (state: CATEGORY_TYPE = null, action: Action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return action.payload.category;

    default:
      return state;
  }
};

export default category;
