import { connect } from "react-redux";
import { getRecipes } from "../selectors/recipe";
import IState from "../../types/IState";
import { RecipesList } from "../components/RecipesList";

export const Recipe = connect((state: IState) => ({
  recipes: getRecipes(state)
}))(RecipesList);
