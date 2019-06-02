import { Action } from "../../../types/redux";
import { SELECT_CATEGORY, CATEGORY_TYPE, MAIN_DISHES } from '../constants/category';

const category = (state: CATEGORY_TYPE = MAIN_DISHES, action: Action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return action.payload.category;

    default:
      return state;
  }
};

export default category;
