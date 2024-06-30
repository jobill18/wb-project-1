import React from "react";

function MonACElement({ value, isEditing, onValueChange }) {
  return isEditing ? (
    <td>
      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </td>
  ) : (
    <td>AC: {value}</td>
  );
}

export default MonACElement;
