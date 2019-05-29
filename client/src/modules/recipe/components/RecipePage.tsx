import React from "react";
import { RecipesList } from "../containers/RecipesList";
import { SearchRecipe } from "../containers/SearchRecipe";
import { RecipeDetails } from "../containers/RecipeDetails";

export function RecipePage() {
  return (
    <div className="Container">
      <SearchRecipe />
      <RecipesList />
      <RecipeDetails />
    </div>
  );
}
