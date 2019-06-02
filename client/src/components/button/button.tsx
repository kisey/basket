import React from "react";
import { cn } from "@bem-react/classname";
import { NavLink } from "redux-first-router-link";
import "./button.css";

const buttonCn = cn("Button");

interface IButtonProps {
  onClick: React.ReactEventHandler;
  children: React.ReactChild;
  active?: boolean;
}

export function Button(props: IButtonProps) {
  const { onClick, children, active = false } = props;
  return (
    <button className={buttonCn({ active })} onClick={onClick}>
      {children}
    </button>
  );
}

interface IHrefButtonProps {
  children: React.ReactChild;
  to: string;
}

export function HrefButton(props: IHrefButtonProps) {
  const { children, to } = props;

  return (
    <NavLink
      className={buttonCn()}
      activeClassName={buttonCn({ active: true })}
      to={to}
    >
      {children}
    </NavLink>
  );
}
