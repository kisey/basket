import { applyMiddleware, combineReducers, createStore, Dispatch } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import IState from "./types/IState";
import recipe from "./modules/recipe/reducers";
import router from "./modules/router";

export default createStore(
  combineReducers<IState>({ recipe: recipe, location: router.reducer }),
  composeWithDevTools(
    router.enhancer,
    applyMiddleware<Dispatch, IState>(...[thunk, router.middleware])
  )
);
