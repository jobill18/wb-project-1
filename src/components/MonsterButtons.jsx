import React from "react";

function MonsterButtons() {
  return (
    (
      <td>
        <button>Edit</button>
      </td>
    ) || (
      <td>
        <button>Done</button>
      </td>
    )
  );
}

export default MonsterButtons;
