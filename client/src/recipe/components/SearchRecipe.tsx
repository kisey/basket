import React from "react";
import { FilterRecipeType } from "../actions/recipe";
import "../styles/search-recipe.css";
import { Input } from "../../components/input/Input";

interface SearchRecipeProps {
  filter: string;
  onChange: FilterRecipeType;
}

export function SearchRecipe(props: SearchRecipeProps) {
  const { filter, onChange } = props;
  return (
    <div className="search-recipe">
      <div className="search-recipe__filter">

      <Input value={filter} onChange={value => onChange(value)} />
      </div>
      <div className="search-recipe__tags">
        tags
      </div>
    </div>
  );
}
