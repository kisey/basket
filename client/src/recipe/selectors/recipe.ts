import { createSelector } from "reselect";
import IState from "../../types/IState";
import { IRecipe, IRecipeEntities } from "../types/recipe";

const getRecipeItems = (state: IState): string[] => state.recipe.recipe.items;
const getRecipeEntities = (state: IState): IRecipeEntities =>
  state.recipe.recipe.entities;

export const getRecipes = createSelector<
  IState,
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
