import { combineReducers } from "redux";
import { Action } from "../../types/redux";
import { Ingredient, IngredientState } from "../types";

const initialState: Ingredient[] = [
  { id: "1", title: "мука" },
  { id: "2", title: "масло" },
  { id: "3", title: "сахар" }
];

const ingredients = (
  state: Ingredient[] = initialState,
  action: Action
): Ingredient[] => {
  switch (action.type) {
    case "START":
      return initialState;

    default:
      return state;
  }
};

export default combineReducers<IngredientState>({ ingredients });
