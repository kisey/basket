import React, { useState, useEffect, useRef } from "react";
import { isDescendant } from "../../utils/dom";

interface EditableProps {
  onClick: (title: string, quantity: string) => void;
}

interface EditProps {
  onAddClick: (title: string, quantity: string) => void;
  onCloseClick: () => void;
}

function Edit({ onAddClick, onCloseClick }: EditProps) {
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
    <div className="edit" ref={editableContainer}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="editable__title"
      />
      <input
        type="text"
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
        className="editable__quantity"
      />
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
