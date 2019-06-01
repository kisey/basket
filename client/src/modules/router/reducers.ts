import { NOT_FOUND, Route } from "redux-first-router";
import { routesMap } from "./actions";
import { Action } from "../../types/redux";

export const components: { [key: string]: string } = Object.keys(
  routesMap
).reduce((acc, current) => ({ ...acc, [current]: current }), {
  [NOT_FOUND]: "NOT_FOUND"
});

export default (state: Route = routesMap.HOME, action: Action) =>
  components[action.type] || state;
