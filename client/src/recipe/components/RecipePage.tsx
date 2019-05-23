import React from "react";
import { RecipesList } from "../containers/RecipesList";
import { SearchRecipe } from "../containers/SearchRecipe";


export function RecipePage() {
  return (
    <div className="recipe-page">
      <h1>Рецепты</h1>
      <SearchRecipe />
      <RecipesList />
    </div>
  );
}
