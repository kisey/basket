import { combineReducers } from "redux";
import { Action } from "../../types/redux";
import { IRecipe, IRecipeEntities, IRecipeState } from "../types/recipe";

const initialItems: string[] = ["1", "2"];
const initialEntities: IRecipeEntities = {
  "1": {
    id: "1",
    title: "Печенье с коррицей",
    text: "Простой рецепт печенек с корицей",
    parts: [
      { ingredient: "1", quantity: 200 },
      { ingredient: "2", quantity: 150 },
      { ingredient: "3", quantity: 300 }
    ]
  },
  "2": {
    id: "2",
    title: "Печенье с коррицей",
    text: "Простой рецепт печенек с корицей",
    parts: [
      { ingredient: "1", quantity: 100 },
      { ingredient: "2", quantity: 200 },
      { ingredient: "3", quantity: 100 }
    ]
  }
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
  state: IRecipeEntities = initialEntities,
  action: Action
): IRecipeEntities => {
  switch (action.type) {
    case "START":
      return initialEntities;

    default:
      return state;
  }
};

export default combineReducers<IRecipeState>({ items, entities });
