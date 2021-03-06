import { connect } from "react-redux";
import { getRecipes } from "../selectors/recipe";
import IState from "../../../types/IState";
import {
  RecipeCardList as RecipeCardListView
} from "../components/RecipeCardList";
import {
  addRecipeToBasket,
  deleteIngredient,
} from "../actions/recipe";

export const RecipesList = connect(
  (state: IState) => ({
    recipes: getRecipes(state)
  }),
  {
    onDeleteClick: deleteIngredient,
    onAddToBasketClick: addRecipeToBasket,
  },
  (mappedProps, dispatchedProps, ownProps) => {
    const { recipes } = mappedProps;
    const { onAddToBasketClick } = dispatchedProps;

    return {
      recipes,
      onAddToBasketClick,
    };
  }
)(RecipeCardListView);

export type OnAddClickType = (
  recipeId: string,
  title: string,
  quantity: string,
  ingredientId?: string
) => void;
