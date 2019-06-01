import { connectRoutes } from "redux-first-router";
import { routesMap } from "./actions";

export default connectRoutes(routesMap);
