import RecipeState from "../modules/recipe/types";
import { LocationState } from "redux-first-router";

export default interface IState {
  recipe: RecipeState;
  location: LocationState;
}
