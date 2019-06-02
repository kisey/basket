import React from "react";
import { FilterRecipeType } from "../actions/recipe";
import { Input } from "../../../components/input/Input";
import { selectCategoryType } from "../actions/category";
import { Categories } from "./Categories";
import "../styles/search-recipe.css";

import { cn } from "@bem-react/classname";

const searchCN = cn("SearchRecipe");

interface SearchRecipeProps {
  filter: string;
  onChange: FilterRecipeType;
  category: string | null;
  onCategoryClick: selectCategoryType;
}

export function SearchRecipe(props: SearchRecipeProps) {
  const { filter, onChange, category, onCategoryClick } = props;
  return (
    <div className={searchCN()}>
      <div className={searchCN("filter")}>
        <Input
          value={filter}
          label="Название блюда"
          onChange={value => onChange(value)}
        />
      </div>
      <div className={searchCN("categories")}>
        <Categories category={category} onCategoryClick={onCategoryClick} />
      </div>
    </div>
  );
}
