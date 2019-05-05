import React from "react";
import { IRecipe } from "../types/recipe";

export function Recipe(props: IRecipe): React.ReactElement {
  const { title, text, parts } = props;

  return (
    <div className="recipe">
      <h3>{title}</h3>
      <p>{text}</p>
      {parts.map(part => (
        <div key={part.ingredient}>
          <span>{part.ingredient}</span>
          <span>{part.quantity}</span>
        </div>
      ))}
    </div>
  );
}
