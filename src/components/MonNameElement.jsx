import React from "react";

function MonNameElement({ value, isEditing, onValueChange }) {
  return isEditing ? (
    <>
      <label htmlFor="monster-name">Name:</label>
      <input
        type="text"
        name="monster-name"
        value={value}
        placeholder="Creature Name"
        onChange={(e) => onValueChange(e.target.value)}
      />
    </>
  ) : (
    <>{value}</>
  );
}

export default MonNameElement;
