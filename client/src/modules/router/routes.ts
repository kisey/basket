import { routesMap } from "./actions";

const BASE = "/";

export const getRoute = (...parts: string[]) => BASE + parts.join("/");
