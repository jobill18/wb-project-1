import React from "react";
import MonsterEntries from "./MonsterEntries";
import MonsterHeader from "./MonsterHeader";
import MonsterAddEntry from "./MonsterAddEntry";

function MonsterList() {
  return (
    <table>
      <thead>
        <MonsterHeader />
      </thead>
      <tbody>
        <MonsterEntries />
      </tbody>
      <tfoot>
        <MonsterAddEntry />
      </tfoot>
    </table>
  );
}

export default MonsterList;
