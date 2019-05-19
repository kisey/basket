import IState from "../../types/IState";
import { createSelector } from "reselect";
import { IIngredient, IIngredientEntities } from "../types/ingredient";

export const getIngredientEntities = (state: IState): IIngredientEntities =>
  state.recipe.ingredient.entities;

export function getIngredientId(
  ingredientEntities: IIngredientEntities
): string {
  const lastKey = Object.keys(ingredientEntities).length + 1;
  return lastKey.toString();
}

const getId = (state: IState, props: { id: string }): string => props.id;

const getIngredient = createSelector<
  IState,
  { id: string },
  string,
  IIngredientEntities,
  IIngredient
>(
  getId,
  getIngredientEntities,
  (id, entities) => entities[id]
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
