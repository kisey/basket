import { CATEGORIES } from "../constants/category";
import React from "react";

import { cn } from "@bem-react/classname";
import "../styles/categories.css";
import { selectCategoryType } from "../actions/category";
const categoriesCN = cn("Categories");

interface CategoriesProps {
  category: string | null;
  onCategoryClick: selectCategoryType;
}

export function Categories({ category, onCategoryClick }: CategoriesProps) {
  return (
    <ul className={categoriesCN()}>
      {CATEGORIES.map(item => (
        <li key={item}>
          <button
            className={categoriesCN("item", { selected: item === category })}
            onClick={() => {
              const selectItem = category === item ? null : item;
              onCategoryClick(selectItem);
            }}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}
