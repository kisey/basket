import React from "react";
import { cn } from "@bem-react/classname";
import "./list.css";

const listCn = cn("DropdownList");

export function DropdownList({
  children,
  isOpen,
  getMenuProps
}: {
  isOpen: boolean;
  children: React.ReactNode;
  getMenuProps: Function;
}) {
  return (
    <ul {...getMenuProps()} className={listCn({ opened: isOpen })}>
      {children}
    </ul>
  );
}
