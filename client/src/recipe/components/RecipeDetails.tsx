import React from "react";
import { IRecipe } from "../types/recipe";
import { Ingredient } from "../containers/Ingredient";
import {
  AddRecipeToBasketType,
  DeleteIngredientType,
} from "../actions/recipe";
import { AddIngredient } from "./AddIngredient";
import { OnAddClickType } from "../containers/RecipesList";
import { cn } from "@bem-react/classname";

const recipeCN = cn("RecipeDetails");

export interface IRecipeDetailsActions {
  onDeleteClick: DeleteIngredientType;
  onAddClick: OnAddClickType;
  onAddToBasketClick: AddRecipeToBasketType;
}

export interface IRecipeDetailsProps extends IRecipe, IRecipeDetailsActions {}

export function RecipeDetails(props: IRecipeDetailsProps) {
  const {
    id,
    title,
    text,
    category,
    parts,
    onDeleteClick,
    onAddClick,
    onAddToBasketClick,
  } = props;

  return (
    <div className={recipeCN()}>
      <h3 className={recipeCN("title")}>{title}</h3>
      <p className={recipeCN("text")}>{text}</p>
      <p>{category}</p>
      <ul className={recipeCN("ingredients")}>
        {parts.map(part => (
          <li key={part.ingredient} className={recipeCN("ingredient")}>
            <Ingredient id={part.ingredient} />
            <div>{part.quantity}</div>
            <button onClick={() => onDeleteClick(id, part.ingredient)}>
              -
            </button>
          </li>
        ))}
        <li className={recipeCN("ingredient")}>
          <AddIngredient
            onClick={(title, quantity) => onAddClick(id, title, quantity)}
          />
        </li>
      </ul>
      <p>
        <button onClick={() => onAddToBasketClick(id)}>Add to Basket</button>
      </p>
    </div>
  );
}
