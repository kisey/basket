import { connect } from "react-redux";
import IState from "../../types/IState";
import { SearchRecipe as SearchRecipeView } from "../components/SearchRecipe";
import { getFilter } from "../selectors/recipe";
import { filterRecipe } from "../actions/recipe";

export const SearchRecipe = connect(
  (state: IState) => ({
    filter: getFilter(state)
  }),
  {
    onChange: filterRecipe
  }
)(SearchRecipeView);
