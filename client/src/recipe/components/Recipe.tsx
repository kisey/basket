import React from "react";
import { IRecipe } from "../types/recipe";
import { Ingredient } from "../containers/Ingredient";

import "../styles/recipe.css";

export function Recipe(props: IRecipe): React.ReactElement {
  const { title, text, parts } = props;

  return (
    <li className="recipe">
      <h3>{title}</h3>
      <p>{text}</p>
      <ul className="recipe__ingredients">
        {parts.map(part => (
          <li key={part.ingredient} className="recipe__ingredient ">
            <Ingredient id={part.ingredient} />
            <span>{part.quantity}</span>
          </li>
        ))}
      </ul>
    </li>
  );
}
