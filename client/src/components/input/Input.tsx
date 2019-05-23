import React from "react";
import "./input.css";

interface IInput {
  value: string;
  onChange: (value: string) => void;
}

export function Input(props: IInput) {
  const { value, onChange } = props;
  return (
    <div className="input-wrap">
      <input
        className="input"
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <label className="input-label">placeholder</label>
    </div>
  );
}
