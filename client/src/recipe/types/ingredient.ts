export interface IIngredient {
  id: string;
  title: string;
}

export interface IIngredientEntity {
  [key: string]: IIngredient;
}

export interface IIngredientState {
  items: string[];
  entities: IIngredientEntity;
}
