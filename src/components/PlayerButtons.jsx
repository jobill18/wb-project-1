import React from "react";

function PlayerButtons() {
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

export default PlayerButtons;
