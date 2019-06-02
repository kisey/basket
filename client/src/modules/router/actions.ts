import { RoutesMap } from "redux-first-router";

export const pathsMap = {
  HOME: "",
  RECIPES: "recipes"
};

export const routesMap: RoutesMap = {
  HOME: "/",
  RECIPES: "/recipes",
  RECIPE_DETAILS: "/recipes/:id"
};
