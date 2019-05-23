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
      <Input value={filter} onChange={value => onChange(value)} />
    </div>
  );
}
