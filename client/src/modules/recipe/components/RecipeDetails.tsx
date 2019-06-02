import React from "react";
import { IRecipe } from "../types/recipe";
import { Ingredient } from "../containers/Ingredient";
import { AddRecipeToBasketType, DeleteIngredientType } from "../actions/recipe";
import { AddIngredient } from "./AddIngredient";
import { OnAddClickType } from "../containers/RecipesList";
import { cn } from "@bem-react/classname";
import "../styles/recipe-details.css";
import { Icon } from "../../../components/icon/Icon";
import { getIcon } from "../../../components/icon/utils";
import { Button } from "../../../components/button/button";
import { IngredientPart } from './IngredientPart';

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
    onAddToBasketClick
  } = props;

  return (
    <div className={recipeCN()}>
      <h4 className={recipeCN("title")}>{title}</h4>
      <div className={recipeCN("icon")}>
        <Icon icon={category} />
      </div>
      <div className={recipeCN("container")}>
        <div className={recipeCN("description")}>
          <p className={recipeCN("text")}>{text}</p>
        </div>
        <ul className={recipeCN("ingredients")}>
          {parts.map(part => (
            <li key={part.ingredient} className={recipeCN('ingredient')}>
            <IngredientPart
              id={part.ingredient}
              quantity={part.quantity}
              onClick={() => onDeleteClick(id, part.ingredient)}
            />
            </li>
          ))}
          <li className={recipeCN("ingredient")}>
            <AddIngredient
              onClick={(title, quantity) => onAddClick(id, title, quantity)}
            />
          </li>
        </ul>
      </div>
      <Button onClick={() => onAddToBasketClick(id)}>Add to Basket</Button>
    </div>
  );
}
