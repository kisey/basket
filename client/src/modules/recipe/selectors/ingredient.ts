import IState from "../../../types/IState";
import { createSelector } from "reselect";
import { IIngredient, IIngredientEntities } from "../types/ingredient";
import { getSelectedRecipeId } from "./recipe";

export const getIngredientEntities = (state: IState): IIngredientEntities =>
  state.recipe.ingredient.entities;

export function getIngredientId(
  ingredientEntities: IIngredientEntities
): string {
  const lastKey = Object.keys(ingredientEntities).length + 1;
  return lastKey.toString();
}

const getIngredient = createSelector<
  IState,
  string,
  IIngredientEntities,
  IIngredient
>(
  getSelectedRecipeId,
  getIngredientEntities,
  (id, entities) => {
    return entities[id];
  }
);

export const getIngredientTitle = createSelector<
  IState,
  { id: string },
  IIngredient,
  string
>(
  getIngredient,
  ingredient => ingredient.title
);
