import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import State from "./types/state";
import recipe from "./recipe/reducers";

export default createStore(
  combineReducers<State>({ recipe: recipe }),
  applyMiddleware(thunk)
);
