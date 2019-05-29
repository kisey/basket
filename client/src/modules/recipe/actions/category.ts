import { SELECT_CATEGORY } from "../constants/category";

export type selectCategoryType = typeof selectCategory;

export function selectCategory(category: string | null) {
  return {
    type: SELECT_CATEGORY,
    payload: { category }
  };
}
