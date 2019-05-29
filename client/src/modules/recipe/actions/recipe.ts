import {
  ADD_INGREDIENT_TO_RECIPE,
  ADD_RECIPE_TO_BASKET,
  DELETE_INGREDIENT_FROM_RECIPE,
  FILTER_RECIPE,
  SHOW_RECIPES_DETAILS
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

export type AddRecipeToBasketType = typeof addRecipeToBasket;

export function addRecipeToBasket(id: string) {
  return {
    type: ADD_RECIPE_TO_BASKET,
    payload: { id }
  };
}

export type ShowRecipeDetailsType = typeof showRecipeDetails;

export function showRecipeDetails(id: string) {
  return {
    type: SHOW_RECIPES_DETAILS,
    payload: { id }
  };
}
