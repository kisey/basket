import React, { useEffect, useRef, useState } from "react";
import { isDescendant } from "../../../utils/dom";
import { Input } from "../../../components/input/Input";
import { Button } from "../../../components/button/button";
import "../styles/AddIngredientControls.css";
import { cn } from "@bem-react/classname";

const controlsCN = cn("AddIngredientControls");

interface AddIngredientControlsProps {
  onAddClick: (title: string, quantity: string) => void;
  onCloseClick: () => void;
  active: boolean;
}

export function AddIngredientControls({
  onAddClick,
  onCloseClick,
  active
}: AddIngredientControlsProps) {
  const editableContainer = useRef(null);
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    function onDocumentClick(e: Event) {
      if (!editableContainer) {
        return;
      }
      if (isDescendant(editableContainer.current, e.target as HTMLElement, 5)) {
        return;
      }
      onCloseClick();
    }
    document.addEventListener("click", onDocumentClick);
    return () => {
      document.removeEventListener("click", onDocumentClick);
    };
  });
  return (
    <div className={controlsCN()} ref={editableContainer}>
      <div className={controlsCN("titles")}>
        <div className={controlsCN("input")}>
          <Input
            value={title}
            label="Название"
            onChange={value => setTitle(value)}
          />
        </div>
        <div className={controlsCN("input")}>
          <Input
            value={quantity}
            label="Количество"
            onChange={value => setQuantity(value)}
          />
        </div>
      </div>
      <div className={controlsCN("controls")}>
        <div className={controlsCN("button")}>
          <Button
            active={active}
            onClick={() => {
              onAddClick(title, quantity);
              setTitle("");
              setQuantity("");
            }}
          >
            Добавить
          </Button>
        </div>
        <div className={controlsCN("button")}>
          <Button onClick={onCloseClick}>Назад</Button>
        </div>
      </div>
    </div>
  );
}
