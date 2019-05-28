import { IRecipeState } from "./recipe";
import { IIngredientState } from "./ingredient";
import { CATEGORY_TYPE } from "../constants/category";

export default interface IModuleState {
  recipe: IRecipeState;
  ingredient: IIngredientState;
  category: CATEGORY_TYPE;
}
