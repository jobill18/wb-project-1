import React from "react";

function MonsterButtons({
  isEditing,
  onEditClick,
  onSaveClick,
  onRemoveClick,
}) {
  return isEditing ? (
    <th>
      <button onClick={onSaveClick}>Done</button>
      <button onClick={onRemoveClick}>Remove</button>
    </th>
  ) : (
    <th>
      <button onClick={onEditClick}>Edit Creature</button>
    </th>
  );
}

export default MonsterButtons;
