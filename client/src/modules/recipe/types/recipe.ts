import { CATEGORY_TYPE } from "../constants/category";

export interface IRecipePart {
  ingredient: string;
  quantity: number;
}

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
  selected: string;
}
