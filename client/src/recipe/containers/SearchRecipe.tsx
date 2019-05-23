import { connect } from "react-redux";
import IState from "../../types/IState";
import { SearchRecipe as SearchRecipeView } from "../components/SearchRecipe";
import { getFilter } from "../selectors/recipe";
import { filterRecipe } from "../actions/recipe";
import { getSelectedCategory } from '../selectors/category';
import { selectCategory } from '../actions/category';

export const SearchRecipe = connect(
  (state: IState) => ({
    filter: getFilter(state),
    category: getSelectedCategory(state),
  }),
  {
    onChange: filterRecipe,
    onCategoryClick: selectCategory
  }
)(SearchRecipeView);
