import React, { useEffect, useRef, useState } from "react";
import { isDescendant } from "../../utils/dom";
import { Input } from "../../components/input/Input";

interface AddIngredientControlsProps {
  onAddClick: (title: string, quantity: string) => void;
  onCloseClick: () => void;
}

export function AddIngredientControls({
  onAddClick,
  onCloseClick
}: AddIngredientControlsProps) {
  const editableContainer = useRef(null);
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    function onDocumentClick(e: Event) {
      if (!editableContainer) {
        return;
      }
      if (isDescendant(editableContainer.current, e.target as HTMLElement, 3)) {
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
    <div className="add-recipe-controls" ref={editableContainer}>
      <div className="add-recipe-controls__title">
        <Input value={title} onChange={value => setTitle(value)} />
      </div>
      <div className="add-recipe-controls__quantity">
        <Input value={quantity} onChange={value => setQuantity(value)} />
      </div>
      <button
        onClick={() => {
          onAddClick(title, quantity);
          setTitle("");
          setQuantity("");
        }}
      >
        +
      </button>
      <button onClick={onCloseClick}>-</button>
    </div>
  );
}
