import React, { useState } from "react";
import { AddIngredientControls } from "./AddIngredientControls";

interface EditableProps {
  onClick: (title: string, quantity: string) => void;
}

export function AddIngredient(props: EditableProps): React.ReactElement {
  const { onClick } = props;
  const [isEdit, onEditClick] = useState(false);

  return (
    <div className="editable">
      {isEdit ? (
        <AddIngredientControls
          onCloseClick={() => onEditClick(false)}
          onAddClick={(title, quantity) => {
            onClick(title, quantity);
            onEditClick(false);
          }}
        />
      ) : (
        <button
          onClick={() => {
            onEditClick(true);
          }}
        >
          +
        </button>
      )}
    </div>
  );
}
