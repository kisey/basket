import React, { useState } from "react";
import { Edit } from "./Edit";

interface EditableProps {
  onClick: (title: string, quantity: string) => void;
}

export function Editable(props: EditableProps): React.ReactElement {
  const { onClick } = props;
  const [isEdit, onEditClick] = useState(false);

  return (
    <div className="editable">
      {isEdit ? (
        <Edit
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
