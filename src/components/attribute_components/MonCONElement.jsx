import React from "react";

function MonCONElement({ value, isEditing, onValueChange }) {
  return isEditing ? (
    <td>
      CON:
      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </td>
  ) : (
    <td>CON: {value}</td>
  );
}

export default MonCONElement;
