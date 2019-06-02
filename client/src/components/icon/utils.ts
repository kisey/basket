import soup from "../../img/icon/soup.svg";
import cake from "../../img/icon/strawberry-cake.svg";
import tray from "../../img/icon/tray.svg";
import water from "../../img/icon/water.svg";
import {
  CATEGORY_TYPE,
  DESSERT,
  DRINKS,
  FIRST_MEAL,
  MAIN_DISHES
} from "../../modules/recipe/constants/category";

export const iconsMap = {
  [FIRST_MEAL]: soup,
  [MAIN_DISHES]: tray,
  [DESSERT]: cake,
  [DRINKS]: water
};

export const getIcon = (icon: CATEGORY_TYPE): string => iconsMap[icon];
