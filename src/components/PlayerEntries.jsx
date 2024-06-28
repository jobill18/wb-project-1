import React from "react";
import PlayerBtnMoveEntry from "./PlayerBtnMoveEntry";
import PlayerButtons from "./PlayerButtons";

function PlayerEntries() {
  return (
    <tr>
      <PlayerBtnMoveEntry />
      <td>Player 1</td>
      <td>1</td>
      <td>15</td>
      <td>10</td>
      <PlayerButtons />
    </tr>
  );
}

export default PlayerEntries;
