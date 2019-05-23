import { combineReducers } from "redux";
import ingredient from "./ingredient";
import recipe from "./recipe";
import category from "./category";
import IModuleState from "../types";

export default combineReducers<IModuleState>({ ingredient, recipe, category });
