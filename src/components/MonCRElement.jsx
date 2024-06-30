import React from "react";

function MonCRElement({ value, isEditing, onValueChange }) {
  return isEditing ? (
    <td>
      CR:
      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </td>
  ) : (
    <td>CR: {value}</td>
  );
}

export default MonCRElement;
