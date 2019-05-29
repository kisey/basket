import IState from "../../../types/IState";

export const getSelectedCategory = (state: IState): string | null => state.recipe.category;
