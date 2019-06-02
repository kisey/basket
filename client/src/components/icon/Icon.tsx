import React from "react";
import "./Icon.css";
import { getIcon } from "./utils";
import { CATEGORY_TYPE } from "../../modules/recipe/constants/category";

interface IIconProps {
  icon: CATEGORY_TYPE;
}

export function Icon(props: IIconProps) {
  const { icon } = props;
  return (
    <div className="Icon" style={{ backgroundImage: `url(${getIcon(icon)}` }} />
  );
}
