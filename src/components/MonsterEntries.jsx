import React from "react";
import MonsterButtons from "./MonsterButtons";
import MonsterBtnMoveEntry from "./MonsterBtnMoveEntry";

function MonsterEntries() {
  return (
    <tr>
      <MonsterBtnMoveEntry />
      <td>Goblin</td>
      <td>CR: 1/4</td>
      <td>AC: 15</td>
      <td>HP: 7</td>
      <MonsterButtons />
    </tr>
  );
}

export default MonsterEntries;
