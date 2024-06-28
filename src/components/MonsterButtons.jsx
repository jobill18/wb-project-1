import React from "react";

function MonsterButtons({ isEditing, onEditClick, onSaveClick }) {
  return isEditing ? (
    <td>
      <button onClick={onSaveClick}>Done</button>
      <button>Remove</button>
    </td>
  ) : (
    <td>
      <button onClick={onEditClick}>Edit</button>
    </td>
  );
}

export default MonsterButtons;
