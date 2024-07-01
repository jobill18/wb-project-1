import React from "react";

function MonActionElement({ value, isEditing, onValueChange }) {
  return isEditing ? (
    <>
      Actions:
      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </>
  ) : (
    <>
      <strong>Actions</strong>: {value}
    </>
  );
}

export default MonActionElement;
