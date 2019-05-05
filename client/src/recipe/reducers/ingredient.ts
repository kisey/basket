import { combineReducers } from "redux";
import { Action } from "../../types/redux";
import {
  IIngredient,
  IIngredientEntity,
  IIngredientState
} from "../types/ingredient";

const initialItems: string[] = ["1", "2", "3"];
const initialEntities: IIngredientEntity = {
  "1": { id: "1", title: "масло" },
  "2": { id: "2", title: "мука" },
  "3": { id: "3", title: "сахар" }
};

const items = (state: string[] = initialItems, action: Action): string[] => {
  switch (action.type) {
    case "START":
      return initialItems;

    default:
      return state;
  }
};

const entities = (
  state: IIngredientEntity = initialEntities,
  action: Action
): IIngredientEntity => {
  switch (action.type) {
    case "START":
      return initialEntities;

    default:
      return state;
  }
};

export default combineReducers<IIngredientState>({ items, entities });
