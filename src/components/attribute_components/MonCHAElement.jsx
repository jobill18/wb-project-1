import React from "react";

function MonCHAElement({ value, isEditing, onValueChange }) {
  return isEditing ? (
    <td>
      CHA:
      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </td>
  ) : (
    <td>CHA: {value}</td>
  );
}

export default MonCHAElement;
