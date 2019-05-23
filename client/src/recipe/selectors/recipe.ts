import { createSelector } from "reselect";
import IState from "../../types/IState";
import { IRecipe, IRecipeEntities } from "../types/recipe";

const getRecipeItems = (state: IState): string[] => state.recipe.recipe.items;
const getRecipeEntities = (state: IState): IRecipeEntities =>
  state.recipe.recipe.entities;

export const getFilter = (state: IState): string => state.recipe.recipe.filter;

export const getRecipes = createSelector<
  IState,
  string[],
  IRecipeEntities,
  string,
  IRecipe[]
>(
  getRecipeItems,
  getRecipeEntities,
  getFilter,
  (items, recipes, filter) => {
    const template = new RegExp(filter, "i");
    return items
      .map(id => recipes[id])
      .filter(recipe => template.test(recipe.title));
  }
);
