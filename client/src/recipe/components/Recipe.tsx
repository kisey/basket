import React from "react";
import { IRecipe } from "../types/recipe";
import { Ingredient } from "../containers/Ingredient";

import "../styles/recipe.css";
import { AddIngredientType, DeleteIngredientType } from "../actions/recipe";

interface IRecipeProps extends IRecipe {
  onDeleteClick: DeleteIngredientType;
  onAddClick: AddIngredientType;
}

export function Recipe(props: IRecipeProps): React.ReactElement {
  const { id, title, text, parts, onDeleteClick, onAddClick } = props;

  return (
    <li className="recipe">
      <h3>{title}</h3>
      <p>{text}</p>
      <ul className="recipe__ingredients">
        {parts.map(part => (
          <li key={part.ingredient} className="recipe__ingredient ">
            <Ingredient id={part.ingredient} />
            <div>{part.quantity}</div>
            <button onClick={() => onDeleteClick(id, part.ingredient)}>
              -
            </button>
          </li>
        ))}
        <li className="recipe__ingredient">
          <button onClick={() => onAddClick(id, "1", 200)}>+</button>
        </li>
      </ul>
    </li>
  );
}
