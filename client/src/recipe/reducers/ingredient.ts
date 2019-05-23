import { combineReducers } from "redux";
import { Action } from "../../types/redux";
import { IIngredientEntities, IIngredientState } from "../types/ingredient";
import { ADD_INGREDIENT } from "../constants/ingredient";

const initialItems: string[] = ["1", "2", "3"];
const initialEntities: IIngredientEntities = {
  "1": { id: "1", title: "масло" },
  "2": { id: "2", title: "мука" },
  "3": { id: "3", title: "сахар" }
};

const items = (state: string[] = initialItems, action: Action): string[] => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return initialItems;

    default:
      return state;
  }
};

const entities = (
  state: IIngredientEntities = initialEntities,
  action: Action
): IIngredientEntities => {
  switch (action.type) {
    case ADD_INGREDIENT:
      const { id, title } = action.payload;
      return {
        ...state,
        [id]: {
          id,
          title
        }
      };

    default:
      return state;
  }
};

export default combineReducers<IIngredientState>({ items, entities });
