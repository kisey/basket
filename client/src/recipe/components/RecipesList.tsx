import React from "react";
import { IRecipe } from "../types/recipe";
import { Recipe } from "./Recipe";

import "../styles/recipes.css";
import { DeleteIngredientType } from "../actions/recipe";
import { OnAddClickType } from "../containers/RecipesList";

interface IRecipeListProps {
  recipes: IRecipe[];
  onDeleteClick: DeleteIngredientType;
  onAddClick: OnAddClickType;
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
