import React from "react";
import { IRecipe } from "../types/recipe";
import { Recipe } from "./Recipe";

import "../styles/recipes.css";
import { AddIngredientType, DeleteIngredientType } from "../actions/recipe";

interface IRecipeListProps {
  recipes: IRecipe[];
  onDeleteClick: DeleteIngredientType;
  onAddClick: AddIngredientType;
}

export function RecipesList(props: IRecipeListProps): React.ReactElement {
  const { recipes, onAddClick, onDeleteClick } = props;
  return (
    <ul className="recipes">
      {recipes.map(recipe => (
        <Recipe
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          text={recipe.text}
          parts={recipe.parts}
          onDeleteClick={onDeleteClick}
          onAddClick={onAddClick}
        />
      ))}
    </ul>
  );
}
