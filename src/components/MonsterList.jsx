import React from "react";
import MonsterEntries from "./MonsterEntries";
import MonsterHeader from "./MonsterHeader";
import MonsterAddEntry from "./MonsterAddEntry";

function MonsterList() {
  const monsterEntries = initialMonsterData.map((monsterData) => {
    const { id, name, ac, hp, cr } = monsterData;

    return (
      <MonsterEntries
        key={id}
        initialTableData={{ name, ac, hp, cr }}
        initialIsEditing={false}
      />
    );
  });

  return (
    <table>
      <thead>
        <MonsterHeader />
      </thead>
      <tbody>{monsterEntries}</tbody>
      <tfoot>
        <MonsterAddEntry />
      </tfoot>
    </table>
  );
}

export default MonsterList;
