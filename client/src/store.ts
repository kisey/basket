import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import recipes from "./recipe/reducers";
import ingredients from "./ingredient/reducers";
import { CommonState } from "./types/state";

export default createStore(
  combineReducers<CommonState>({ recipes, ingredients }),
  applyMiddleware(thunk)
);
