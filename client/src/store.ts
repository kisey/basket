import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import recipe from "./recipe/reducers/index";

const defaultState = {
  recipe: []
};

export default createStore(combineReducers(recipe), applyMiddleware(thunk));
