import { IngredientState } from "../ingredient/types";
import { RecipeState } from "../recipe/types";

export interface CommonState {
  ingredients: IngredientState;
  recipes: RecipeState;
}
