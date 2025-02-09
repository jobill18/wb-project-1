import React from "react";

function MonACElement({ value, isEditing, onValueChange }) {
  return isEditing ? (
    <td colSpan={2}>
      AC:
      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </td>
  ) : (
    <td colSpan={2}>AC: {value}</td>
  );
}

export default MonACElement;
