import React from "react";

function MonsterAddEntry({ onClick }) {
  return (
    <tr>
      <td colSpan={5}>
        <button onClick={onClick}>Add</button>
      </td>
    </tr>
  );
}

export default MonsterAddEntry;
