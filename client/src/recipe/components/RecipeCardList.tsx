import React from "react";
import { IRecipe } from "../types/recipe";
import { RecipeCard } from "./RecipeCard";

import "../styles/recipes.css";
import {
  AddRecipeToBasketType,
  ShowRecipeDetailsType
} from "../actions/recipe";

interface IRecipeListProps {
  recipes: IRecipe[];
  onAddToBasketClick: AddRecipeToBasketType;
  onShowDetailsClick: ShowRecipeDetailsType;
}

export function RecipeCardList(props: IRecipeListProps) {
  const { recipes, onAddToBasketClick, onShowDetailsClick } = props;
  return (
    <ul className="recipes">
      {recipes.map(recipe => (
        <RecipeCard
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          text={recipe.text}
          category={recipe.category}
          onAddToBasketClick={onAddToBasketClick}
          onShowDetailsClick={onShowDetailsClick}
        />
      ))}
    </ul>
  );
}
