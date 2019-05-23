import { IRecipeState } from "./recipe";
import { IIngredientState } from "./ingredient";

export default interface IModuleState {
  recipe: IRecipeState;
  ingredient: IIngredientState;
  category: string | null;
}
