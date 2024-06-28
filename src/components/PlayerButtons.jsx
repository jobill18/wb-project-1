import React from "react";

function PlayerButtons({ isEditing }) {
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

export default PlayerButtons;
