import React from "react";

interface EditableProps {
  onClick: (title: string, quantity: string) => void;
}

export function Editable(props: EditableProps): React.ReactElement {
  const { onClick } = props;

  const [isEdit, onEditClick] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [quantity, setQuantity] = React.useState("");

  return (
    <div className="editable">
      {isEdit ? (
        <>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="editable__title"
          />
          <input
            type="text"
            value={quantity.toString()}
            onChange={e => setQuantity(e.target.value)}
            className="editable__quantity"
          />
          <button
            onClick={() => {
              onClick(title, quantity);
              setTitle("");
              setQuantity("");
              onEditClick(!isEdit);
            }}
          >
            +
          </button>
          <button onClick={() => onEditClick(!isEdit)}>-</button>
        </>
      ) : (
        <button
          onClick={() => {
            onEditClick(!isEdit);
          }}
        >
          +
        </button>
      )}
    </div>
  );
}
