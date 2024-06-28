import React from "react";
import MonsterButtons from "./MonsterButtons";
import MonsterBtnMoveEntry from "./MonsterBtnMoveEntry";

function MonsterEntries() {
  return (
    <tr>
      <MonsterBtnMoveEntry />
      <td>Goblin</td>
      <td>1/4</td>
      <td>15</td>
      <td>7</td>
      <MonsterButtons />
    </tr>
  );
}

export default MonsterEntries;
