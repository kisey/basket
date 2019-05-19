import { connect } from "react-redux";
import { getRecipes } from "../selectors/recipe";
import IState from "../../types/IState";
import { RecipesList as RecipesListView } from "../components/RecipesList";
import { addIngredientToRecipe, deleteIngredient } from "../actions/recipe";
import { addIngredient } from "../actions/ingredient";
import {
  getIngredientEntities,
  getIngredientId
} from "../selectors/ingredient";
import { parseQuantity } from "../../utils/quantity";

export const RecipesList = connect(
  (state: IState) => ({
    recipes: getRecipes(state),
    ingredients: getIngredientEntities(state)
  }),
  { onDeleteClick: deleteIngredient, addIngredientToRecipe, addIngredient },
  (mappedProps, dispatchedProps, ownProps) => {
    const { ingredients, recipes } = mappedProps;
    const {
      onDeleteClick,
      addIngredientToRecipe,
      addIngredient
    } = dispatchedProps;

    return {
      recipes,
      onDeleteClick,
      onAddClick: (
        recipeId: string,
        title: string,
        quantity: string,
        ingredientId?: string
      ) => {
        if (title === "" || quantity === "") {
          return;
        }
        const parsedQuantity = parseQuantity(quantity);
        let id;
        if (ingredientId) {
          id = ingredientId;
        } else {
          id = getIngredientId(ingredients);
          addIngredient(id, title);
        }

        addIngredientToRecipe(recipeId, id, parsedQuantity);
      }
    };
  }
)(RecipesListView);

export type OnAddClickType = (
  recipeId: string,
  title: string,
  quantity: string,
  ingredientId?: string
) => void;
