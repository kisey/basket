import {
  FIRST_MEAL,
  MAIN_DISHES,
  DESSERT,
  DRINKS
} from "../constants/category";

export interface IRecipePart {
  ingredient: string;
  quantity: number;
}


// @ts-ignore
export type CATEGORY_TYPE = FIRST_MEAL | MAIN_DISHES | DESSERT | DRINKS;

export interface IRecipe {
  id: string;
  title: string;
  text: string;
  parts: IRecipePart[];
  category: CATEGORY_TYPE;
}

export interface IRecipeEntities {
  [key: string]: IRecipe;
}

export interface IRecipeState {
  items: string[];
  entities: IRecipeEntities;
  filter: string;
}
