import React from "react";
import { IRecipe } from "../types/recipe";
import { Recipe } from "./Recipe";

export function RecipesList(props: { recipes: IRecipe[] }): React.ReactElement {
  const { recipes } = props;
  return (
    <ul>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          text={recipe.text}
          parts={recipe.parts}
        />
      ))}
    </ul>
  );
}
