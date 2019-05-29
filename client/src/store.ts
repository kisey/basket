import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import IState from "./types/IState";
import recipe from "./modules/recipe/reducers";
import { connectRoutes } from "redux-first-router";

declare const process: any;
declare const window: any;

const isDevelopment = process.env.NODE_ENV === "development";

const composeEnhancers =
  (isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default createStore(
  combineReducers<IState>({ recipe: recipe }),
  composeEnhancers(applyMiddleware(thunk))
);
