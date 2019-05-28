import { createSelector } from "reselect";
import IState from "../../types/IState";
import { IRecipe, IRecipeEntities } from "../types/recipe";
import { getSelectedCategory } from "./category";

const getRecipeItems = (state: IState): string[] => state.recipe.recipe.items;
const getRecipeEntities = (state: IState): IRecipeEntities =>
  state.recipe.recipe.entities;

export const getFilter = (state: IState): string => state.recipe.recipe.filter;

export const getSelectedRecipeId = (state: IState): string =>
  state.recipe.recipe.selected;

export const getRecipe = createSelector<
  IState,
  string,
  IRecipeEntities,
  IRecipe | null
>(
  getSelectedRecipeId,
  getRecipeEntities,
  (id, entities) => {
    return entities[id];
  }
);

export const getRecipes = createSelector<
  IState,
  string[],
  IRecipeEntities,
  string,
  string | null,
  IRecipe[]
>(
  getRecipeItems,
  getRecipeEntities,
  getFilter,
  getSelectedCategory,
  (items, recipes, filter, category) => {
    const template = new RegExp(filter, "i");
    return items
      .map(id => recipes[id])
      .filter(
        recipe =>
          (category === null || recipe.category === category) &&
          template.test(recipe.title)
      );
  }
);
