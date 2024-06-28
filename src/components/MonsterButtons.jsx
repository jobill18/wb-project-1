import React from "react";

function MonsterButtons({ isEditing }) {
  return isEditing ? (
    <td>
      <button>Done</button>
      <button>Remove</button>
    </td>
  ) : (
    <td>
      <button>Edit</button>
    </td>
  );
}

export default MonsterButtons;
