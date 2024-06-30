import React from "react";

function MonHPElement({ value, isEditing, onValueChange }) {
  return isEditing ? (
    <td>
      HP:
      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </td>
  ) : (
    <td>HP: {value}</td>
  );
}

export default MonHPElement;
