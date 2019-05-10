import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import IState from "./types/IState";
import recipe from "./recipe/reducers";

export default createStore(
  combineReducers<IState>({ recipe: recipe }),
  applyMiddleware(thunk)
);
