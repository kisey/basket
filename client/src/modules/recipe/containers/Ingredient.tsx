import { Ingredient as IngredientView } from "../components/Ingredient";
import { connect } from "react-redux";
import { getIngredientTitle } from "../selectors/ingredient";
import IState from "../../../types/IState";

export const Ingredient = connect((state: IState, props: { id: string }) => ({
  title: getIngredientTitle(state, props)
}))(IngredientView);
