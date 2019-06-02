import React from "react";
import { connect } from "react-redux";
import { getRecipe } from "../selectors/recipe";
import IState from "../../../types/IState";
import {
  IRecipeDetailsActions,
  RecipeDetails as RecipeDetailsView
} from "../components/RecipeDetails";
import {
  addIngredientToRecipe,
  addRecipeToBasket,
  deleteIngredient,
} from "../actions/recipe";
import { addIngredient } from "../actions/ingredient";
import {
  getIngredientEntities,
  getNewIngredientId
} from "../selectors/ingredient";
import { parseQuantity } from "../../../utils/quantity";
import { IRecipe } from "../types/recipe";

interface IRecipeDetailsContainerProps extends IRecipeDetailsActions {
  recipe: IRecipe | null;
}

export const RecipeDetails = connect(
  (state: IState) => ({
    recipe: getRecipe(state),
    ingredients: getIngredientEntities(state)
  }),
  {
    onDeleteClick: deleteIngredient,
    addIngredientToRecipe,
    addIngredient,
    onAddToBasketClick: addRecipeToBasket
  },
  (mappedProps, dispatchedProps, ownProps) => {
    const { ingredients, recipe } = mappedProps;

    const {
      onDeleteClick,
      addIngredientToRecipe,
      addIngredient,
      onAddToBasketClick
    } = dispatchedProps;

    return {
      recipe,
      onDeleteClick,
      onAddToBasketClick,
      onAddClick: (
        recipeId: string,
        title: string,
        quantity: string,
        ingredientId?: string
      ) => {
        if (title === "") {
          return;
        }
        const parsedQuantity = parseQuantity(quantity);
        let id;
        if (ingredientId) {
          id = ingredientId;
        } else {
          id = getNewIngredientId(ingredients);
          addIngredient(id, title);
        }

        addIngredientToRecipe(recipeId, id, parsedQuantity);
      }
    };
  }
)(function RecipeDetailsConnect(props) {
  const { recipe, onDeleteClick, onAddClick, onAddToBasketClick } = props;

  if (recipe === undefined) {
    return null;
  }

  const { id, text, category, title, parts } = recipe;

  return (
    <RecipeDetailsView
      {...{
        onDeleteClick,
        onAddClick,
        onAddToBasketClick,
        id,
        text,
        category,
        title,
        parts
      }}
    />
  );
});

export type OnAddClickType = (
  recipeId: string,
  title: string,
  quantity: string,
  ingredientId?: string
) => void;
