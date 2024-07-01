import React from "react";

function MonDEXElement({ value, isEditing, onValueChange }) {
  return isEditing ? (
    <td>
      DEX:
      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </td>
  ) : (
    <td>DEX: {value}</td>
  );
}

export default MonDEXElement;
