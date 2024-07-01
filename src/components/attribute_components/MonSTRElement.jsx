import React from "react";

function MonSTRElement({ value, isEditing, onValueChange }) {
  return isEditing ? (
    <td>
      STR:
      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </td>
  ) : (
    <td>STR: {value}</td>
  );
}

export default MonSTRElement;
