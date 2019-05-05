export interface IRecipePart {
  ingredient: string;
  quantity: number;
}

export interface IRecipe {
  id: string;
  title: string;
  text: string;
  parts: IRecipePart[];
}

export interface IRecipeEntities {
  [key: string]: IRecipe
}

export interface IRecipeState {
  items: string[];
  entities: IRecipeEntities
}
