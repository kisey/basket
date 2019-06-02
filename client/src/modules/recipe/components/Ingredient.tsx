import React from "react";
import "../styles/ingredient.css";

interface IIngredientProps {
  title: string;
}

export function Ingredient(props: IIngredientProps) {
  const { title } = props;
  return (
    <div className="Ingredient">
      <span>{title}</span>
    </div>
  );
}
