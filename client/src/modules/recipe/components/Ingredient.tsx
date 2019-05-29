import React from "react";

interface IIngredientProps {
  title: string;
}

export function Ingredient(props: IIngredientProps) {
  const { title } = props;
  return (
    <div className="ingredient">
      <span>{title}</span>
    </div>
  );
}
