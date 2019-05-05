import { createSelector } from "reselect";
import State from "../../types/state";
import { IRecipe, IRecipeEntities } from "../types/recipe";

const getRecipeItems = (state: State): string[] => state.recipe.recipe.items;
const getRecipeEntities = (state: State): IRecipeEntities =>
  state.recipe.recipe.entities;

export const getRecipes = createSelector<
  State,
  string[],
  IRecipeEntities,
  IRecipe[]
>(
  getRecipeItems,
  getRecipeEntities,
  (items, entities) => {
    return items.map(id => entities[id]);
  }
);
