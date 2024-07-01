import React from "react";

function MonHPElement({ value, isEditing, onValueChange }) {
  return isEditing ? (
    <td colSpan={2}>
      HP:
      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </td>
  ) : (
    <td colSpan={2}>HP: {value}</td>
  );
}

export default MonHPElement;
