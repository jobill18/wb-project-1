import React from "react";

function MonProfElement({ value, isEditing, onValueChange }) {
  return isEditing ? (
    <td colSpan={2}>
      Proficiencies:
      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </td>
  ) : (
    <td colSpan={2}>
      <strong>Proficiencies</strong>: {value}
    </td>
  );
}

export default MonProfElement;
