import React from "react";

function MonsterButtons({
  isEditing,
  onEditClick,
  onSaveClick,
  onRemoveClick,
}) {
  return isEditing ? (
    <th colSpan={2}>
      <button onClick={onSaveClick}>Done</button>
      <button onClick={onRemoveClick}>Remove</button>
    </th>
  ) : (
    <th colSpan={2}>
      <button onClick={onEditClick}>Edit Creature</button>
    </th>
  );
}

export default MonsterButtons;
