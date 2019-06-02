import React from "react";
import { Ingredient } from "../containers/Ingredient";
import { cn } from "@bem-react/classname";
import { Button } from "../../../components/button/button";
import "../styles/ingredient-part.css";

const ingredientPartCN = cn("IngredientPart");

interface IIngredientPartProps {
  id: string;
  quantity: number;
  onClick: React.ReactEventHandler;
}

export function IngredientPart(props: IIngredientPartProps) {
  const { id, quantity, onClick } = props;
  return (
    <li className={ingredientPartCN()}>
      <div className={ingredientPartCN("titles")}>
        <div className={ingredientPartCN("label")}>
          <div className={ingredientPartCN("title")}>Название</div>
          <Ingredient id={id} />
        </div>
        <div className={ingredientPartCN("label")}>
          <div className={ingredientPartCN("title")}>Количество</div>
          <div>{quantity}</div>
        </div>
      </div>
      <div className={ingredientPartCN("controls")}>
        <Button onClick={onClick}>-</Button>
      </div>
    </li>
  );
}
