export interface IIngredient {
  id: string;
  title: string;
}

export interface IIngredientEntities {
  [key: string]: IIngredient;
}

export interface IIngredientState {
  items: string[];
  entities: IIngredientEntities;
}
