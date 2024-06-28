import React from "react";
import PlayerEntries from "./PlayerEntries";
import PlayerHeader from "./PlayerHeader";
import PlayerAddEntry from "./PlayerAddEntry";

function PlayerList() {
  return (
    <table>
      <thead>
        <PlayerHeader />
      </thead>
      <tbody>
        <PlayerEntries />
      </tbody>
      <tfoot>
        <PlayerAddEntry />
      </tfoot>
    </table>
  );
}

export default PlayerList;
