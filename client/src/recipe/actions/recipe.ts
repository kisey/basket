import {
  ADD_INGREDIENT_TO_RECIPE,
  DELETE_INGREDIENT_FROM_RECIPE
} from "../constants/recipe";

export type DeleteIngredientType = typeof deleteIngredient;

export const deleteIngredient = (id: string, ingredientId: string) => ({
  type: DELETE_INGREDIENT_FROM_RECIPE,
  payload: { id, ingredientId }
});

export type AddIngredientType = typeof addIngredint;

export const addIngredint = (
  id: string,
  ingredientId: string,
  quantity: number
) => ({
  type: ADD_INGREDIENT_TO_RECIPE,
  payload: {
    id,
    ingredientId,
    quantity
  }
});
