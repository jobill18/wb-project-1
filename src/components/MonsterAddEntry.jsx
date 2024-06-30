import React from "react";

function MonsterAddEntry({ onClick }) {
  return (
    <tr>
      <td></td>
      <td></td>
      <td colSpan={4}>
        <button onClick={onClick}>Add</button>
      </td>
      <td></td>
    </tr>
  );
}

export default MonsterAddEntry;
