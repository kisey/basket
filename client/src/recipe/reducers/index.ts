import { combineReducers } from "redux";
import { Action } from "../../types/redux";
import { Recipe, RecipeState } from "../types";

const initialState: Recipe[] = [
  {
    id: "1",
    title: "Печенье с коррицей",
    description: "Простой рецепт печенек с корицей",
    parts: ["1", "2", "3"]
  },
  {
    id: "2",
    title: "Кексики",
    description: "Мафины воздушные",
    parts: ["1", "2", "3"]
  }
];

const recipes = (state = initialState, action: Action): Recipe[] => {
  switch (action.type) {
    case "START":
      return initialState;

    default:
      return state;
  }
};

export default combineReducers<RecipeState>({ recipes });
