import { Ingredient } from "../ingredient/types";

export interface IngredientPart {
  id: string;
  ingredient: Ingredient;
  quantity: number;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  parts: string[];
}

export interface RecipeState {
  recipes: Recipe[];
}
