import { connect } from "react-redux";
import { getRecipes } from "../selectors/recipe";
import IState from "../../types/IState";
import { RecipesList as RecipesListView } from "../components/RecipesList";
import { addIngredint, deleteIngredient } from "../actions/recipe";

export const RecipesList = connect(
  (state: IState) => ({
    recipes: getRecipes(state)
  }),
  { onDeleteClick: deleteIngredient, onAddClick: addIngredint }
)(RecipesListView);
