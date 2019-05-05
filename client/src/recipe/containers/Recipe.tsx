import { connect } from "react-redux";
import { getRecipes } from "../selectors/recipe";
import State from "../../types/state";
import { RecipesList } from "../components/RecipesList";

export const Recipe = connect((state: State) => ({
  recipes: getRecipes(state)
}))(RecipesList);
