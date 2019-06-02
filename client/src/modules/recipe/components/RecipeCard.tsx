import React from "react";
import { AddRecipeToBasketType } from "../actions/recipe";
import "../styles/recipe-card.css";
import { cn } from "@bem-react/classname";
import { CATEGORY_TYPE } from "../constants/category";
import { getRoute } from "../../router/routes";
import { pathsMap } from "../../router/actions";
import { Button, HrefButton } from "../../../components/button/button";
import { Icon } from "../../../components/icon/Icon";

const recipeCN = cn("RecipeCard");

interface IRecipeProps {
  id: string;
  title: string;
  text: string;
  category: CATEGORY_TYPE;
  onAddToBasketClick: AddRecipeToBasketType;
}

export function RecipeCard(props: IRecipeProps): React.ReactElement {
  const { id, title, text, category, onAddToBasketClick } = props;

  return (
    <li className={recipeCN()}>
      <h3 className={recipeCN("title")}>{title}</h3>
      <div className={recipeCN("category")}>
        <Icon icon={category} />
      </div>
      <p className={recipeCN("text")}>{text}</p>
      <div className={recipeCN("controls")}>
        <Button active={false} onClick={() => onAddToBasketClick(id)}>
          Add to Basket
        </Button>
        <HrefButton to={getRoute(pathsMap.RECIPES, id)}>
          Go to details
        </HrefButton>
      </div>
    </li>
  );
}
