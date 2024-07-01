import React from "react";

function MonCRElement({ value, isEditing, onValueChange }) {
  return isEditing ? (
    <td colSpan={2}>
      CR:
      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </td>
  ) : (
    <td colSpan={2}>CR: {value}</td>
  );
}

export default MonCRElement;
