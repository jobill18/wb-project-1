import React from "react";

function MonINTElement({ value, isEditing, onValueChange }) {
  return isEditing ? (
    <td>
      INT:
      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </td>
  ) : (
    <td>INT: {value}</td>
  );
}

export default MonINTElement;
