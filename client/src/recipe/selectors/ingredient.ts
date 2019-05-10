import IState from "../../types/IState";
import { createSelector } from "reselect";
import { IIngredient, IIngredientEntities } from "../types/ingredient";
import ingredient from "../reducers/ingredient";

const getIngredientEntities = (state: IState): IIngredientEntities =>
  state.recipe.ingredient.entities;

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
