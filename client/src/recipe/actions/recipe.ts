import {
  ADD_INGREDIENT_TO_RECIPE,
  DELETE_INGREDIENT_FROM_RECIPE,
  FILTER_RECIPE
} from "../constants/recipe";

export type DeleteIngredientType = typeof deleteIngredient;

export function deleteIngredient(id: string, ingredientId: string) {
  return {
    type: DELETE_INGREDIENT_FROM_RECIPE,
    payload: { id, ingredientId }
  };
}

export type FilterRecipeType = typeof filterRecipe;

export function filterRecipe(filter: string) {
  return {
    type: FILTER_RECIPE,
    payload: { filter }
  };
}

export type AddIngredientType = typeof addIngredientToRecipe;

export function addIngredientToRecipe(
  id: string,
  ingredientId: string,
  quantity: number
) {
  return {
    type: ADD_INGREDIENT_TO_RECIPE,
    payload: {
      id,
      ingredientId,
      quantity
    }
  };
}
