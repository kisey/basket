import { combineReducers } from "redux";
import { Action } from "../../../types/redux";
import { IRecipeEntities, IRecipePart, IRecipeState } from "../types/recipe";
import {
  ADD_INGREDIENT_TO_RECIPE,
  DELETE_INGREDIENT_FROM_RECIPE,
  FILTER_RECIPE,
  SHOW_RECIPES_DETAILS
} from "../constants/recipe";
import { DESSERT, FIRST_MEAL, MAIN_DISHES } from "../constants/category";

const initialItems: string[] = ["1", "2", "3", "4", "5", "6"];
const initialEntities: IRecipeEntities = {
  "1": {
    id: "1",
    title: "Печенье с коррицей",
    text: "Простой рецепт печенек с корицей",
    category: DESSERT,
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
    category: DESSERT,
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
    category: MAIN_DISHES,
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
    category: DESSERT,
    parts: [
      { ingredient: "1", quantity: 100 },
      { ingredient: "2", quantity: 200 },
      { ingredient: "3", quantity: 100 }
    ]
  },
  "5": {
    id: "5",
    title: "Курица с гречкой",
    text: "Дешево, полезно, сердито",
    category: MAIN_DISHES,
    parts: [
      { ingredient: "4", quantity: 100 },
      { ingredient: "5", quantity: 200 }
    ]
  },
  "6": {
    id: "6",
    title: "Борщ",
    text: "Сытное первое блюда",
    category: FIRST_MEAL,
    parts: [
      { ingredient: "6", quantity: 100 },
      { ingredient: "7", quantity: 200 },
      { ingredient: "8", quantity: 100 }
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

const filter = (state: string = "", action: Action) => {
  switch (action.type) {
    case FILTER_RECIPE:
      return action.payload.filter;

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

const selected = (state: string = "", action: Action) => {
  switch (action.type) {
    case SHOW_RECIPES_DETAILS:
      return action.payload.id;

    default:
      return state;
  }
};

export default combineReducers<IRecipeState>({
  items,
  entities,
  filter,
  selected
});
