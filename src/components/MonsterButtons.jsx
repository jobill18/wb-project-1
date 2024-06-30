import React from "react";

function MonsterButtons({
  isEditing,
  onEditClick,
  onSaveClick,
  onRemoveClick,
}) {
  return isEditing ? (
    <td>
      <button onClick={onSaveClick}>Done</button>
      <button onClick={onRemoveClick}>Remove</button>
    </td>
  ) : (
    <td>
      <button onClick={onEditClick}>Edit</button>
    </td>
  );
}

export default MonsterButtons;
