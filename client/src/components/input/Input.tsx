import React from "react";
import "./input.css";
import { cn } from "@bem-react/classname";

const inputCn = cn("Input");

interface IInput {
  value: string;
  onChange: (value: string) => void;
  label: string;
}

export function Input(props: IInput) {
  const { value, onChange, label } = props;
  return (
    <div className={inputCn()}>
      <input
        className={inputCn("control")}
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <label className={inputCn("label", { active: !!value })}>{label}</label>
    </div>
  );
}
