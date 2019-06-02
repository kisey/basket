import React, { useState } from "react";
import { AddIngredientControls } from "./AddIngredientControls";
import { Button } from "../../../components/button/button";

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
          active={isEdit}
          onCloseClick={() => onEditClick(false)}
          onAddClick={(title, quantity) => {
            onClick(title, quantity);
            onEditClick(false);
          }}
        />
      ) : (
        <Button
          onClick={() => {
            onEditClick(true);
          }}
        >
          +
        </Button>
      )}
    </div>
  );
}
