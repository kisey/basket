import { ADD_INGREDIENT } from "../constants/ingredient";

export type AddIngredeintType = typeof addIngredient;

export function addIngredient(
  id: string,
  title: string
): { type: string; payload: { id: string; title: string } } {
  return {
    type: ADD_INGREDIENT,
    payload: {
      id,
      title
    }
  };
}
