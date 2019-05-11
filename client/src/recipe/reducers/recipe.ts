import { combineReducers } from "redux";
import { Action } from "../../types/redux";
import {
  IRecipe,
  IRecipeEntities,
  IRecipePart,
  IRecipeState
} from "../types/recipe";
import {
  ADD_INGREDIENT_TO_RECIPE,
  DELETE_INGREDIENT_FROM_RECIPE
} from "../constants/recipe";

const initialItems: string[] = ["1", "2", "3", "4"];
const initialEntities: IRecipeEntities = {
  "1": {
    id: "1",
    title: "Печенье с коррицей",
    text: "Простой рецепт печенек с корицей",
    parts: [
      { ingredient: "1", quantity: 200 },
      { ingredient: "2", quantity: 150 },
      { ingredient: "3", quantity: 300 }
    ]
  },
  "2": {
    id: "2",
    title: "Печенье с коррицей",
    text: "Простой рецепт печенек с корицей",
    parts: [
      { ingredient: "1", quantity: 100 },
      { ingredient: "2", quantity: 200 },
      { ingredient: "3", quantity: 100 }
    ]
  },
  "3": {
    id: "3",
    title: "Пицца тесто",
    text: "Тесто для пиццы",
    parts: [
      { ingredient: "1", quantity: 100 },
      { ingredient: "2", quantity: 200 },
      { ingredient: "3", quantity: 100 }
    ]
  },
  "4": {
    id: "4",
    title: "Мафины",
    text: "Сдобные шоколадные мафины",
    parts: [
      { ingredient: "1", quantity: 100 },
      { ingredient: "2", quantity: 200 },
      { ingredient: "3", quantity: 100 }
    ]
  }
};

const items = (state: string[] = initialItems, action: Action): string[] => {
  switch (action.type) {
    case "START":
      return initialItems;

    default:
      return state;
  }
};

const createRecipePart = (
  ingredient: string,
  quantity: number
): IRecipePart => ({ ingredient, quantity });

const entities = (
  state: IRecipeEntities = initialEntities,
  action: Action
): IRecipeEntities => {
  switch (action.type) {
    case "START":
      return initialEntities;

    case ADD_INGREDIENT_TO_RECIPE: {
      const { id, ingredientId, quantity } = action.payload;
      const entity = state[id];
      return {
        ...state,
        [id]: {
          ...entity,
          parts: [...entity.parts, createRecipePart(ingredientId, quantity)]
        }
      };
    }

    case DELETE_INGREDIENT_FROM_RECIPE: {
      const entity = state[action.payload.id];

      return {
        ...state,
        [action.payload.id]: {
          ...entity,
          parts: entity.parts.filter(
            part => part.ingredient !== action.payload.ingredientId
          )
        }
      };
    }

    default:
      return state;
  }
};

export default combineReducers<IRecipeState>({ items, entities });
