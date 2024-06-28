import React from "react";

function PlayerEntries() {
  return (
    <tr>
      <td>
        <button>Move Up</button>
      </td>
      <td>
        <button>Move Down</button>
      </td>
      <td>Player 1</td>
      <td>Level: 1</td>
      <td>AC: 15</td>
      <td>HP: 10</td>
      <td>
        <button>Edit/Save or Delete</button>
      </td>
    </tr>
  );
}

export default PlayerEntries;
