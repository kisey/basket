import React from "react";

interface EditableProps {
  id: string;
}

function AddIngredient(): React.ReactElement {
  const [title, setTitle] = React.useState("");
  const [quantity, setQuantity] = React.useState(0);

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={quantity}
        onChange={e => setQuantity(parseFloat(e.target.value))}
      />
    </div>
  );
}

export function Editable(props: EditableProps): React.ReactElement {
  const [isEdit, onEditClick] = React.useState(false);

  return (
    <div>
      {isEdit ? (
        <AddIngredient />
      ) : null}
      <button onClick={() => onEditClick(!isEdit)}>{isEdit ? "-" : "+"}</button>
    </div>
  );
}
