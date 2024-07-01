import React from "react";

function MonWISElement({ value, isEditing, onValueChange }) {
  return isEditing ? (
    <td>
      WIS:
      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </td>
  ) : (
    <td>WIS: {value}</td>
  );
}

export default MonWISElement;
