import React from "react";
import {
  AddRecipeToBasketType,
  ShowRecipeDetailsType
} from "../actions/recipe";
import "../styles/recipe-card.css";
import { cn } from "@bem-react/classname";
import { CATEGORY_TYPE } from "../constants/category";

const recipeCN = cn("RecipeCard");

interface IRecipeProps {
  id: string;
  title: string;
  text: string;
  category: CATEGORY_TYPE;
  onShowDetailsClick: ShowRecipeDetailsType;
  onAddToBasketClick: AddRecipeToBasketType;
}

export function RecipeCard(props: IRecipeProps): React.ReactElement {
  const {
    id,
    title,
    text,
    category,
    onAddToBasketClick,
    onShowDetailsClick
  } = props;

  return (
    <li className={recipeCN()}>
      <h3 className={recipeCN("title")}>{title}</h3>
      <p className={recipeCN("text")}>{text}</p>
      <p>{category}</p>
      <p>
        <button onClick={() => onAddToBasketClick(id)}>Add to Basket</button>
        <button onClick={() => onShowDetailsClick(id)}>Show Details</button>
      </p>
    </li>
  );
}
