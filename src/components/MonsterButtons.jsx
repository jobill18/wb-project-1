import React from "react";

function MonsterButtons({ isEditing }) {
  return isEditing ? (
    <td>
      <button>Edit</button>
      <button>Remove</button>
    </td>
  ) : (
    <td>
      <button>Done</button>
    </td>
  );
}

export default MonsterButtons;
