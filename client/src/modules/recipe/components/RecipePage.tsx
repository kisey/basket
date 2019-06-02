import React from "react";
import { RecipesList } from "../containers/RecipesList";
import { SearchRecipe } from "../containers/SearchRecipe";
import { RecipeDetails } from "../containers/RecipeDetails";
import { cn } from "@bem-react/classname";
import "../styles/recipe-page.css";

const pageCn = cn("RecipePage");

export function RecipePage() {
  return (
    <div className={pageCn()}>
      <h2 className={pageCn("title")}>Поиск рецепта и добавление в корзину</h2>
      <div className={pageCn("search")}>
        <SearchRecipe />
      </div>
      <div className={pageCn("list")}>
        <RecipesList />
      </div>
      <div className={pageCn("recipeDetails")}>
        <RecipeDetails />
      </div>
    </div>
  );
}
