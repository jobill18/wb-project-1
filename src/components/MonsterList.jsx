import { useState } from "react";
import React from "react";
import MonsterEntries from "./MonsterEntries";
import MonsterHeader from "./MonsterHeader";
import MonsterAddEntry from "./MonsterAddEntry";

function MonsterList() {
  const [initialMonsterData, setInitialMonsterData] = useState([
    { id: 0, name: "Goblin 1", cr: 1 / 4, ac: 15, hp: 7 },
    { id: 1, name: "Goblin 2", cr: 1 / 4, ac: 15, hp: 7 },
    { id: 2, name: "Goblin 3", cr: 1 / 4, ac: 15, hp: 7 },
  ]);

  const monsterEntries = initialMonsterData.map((monsterData) => {
    const { id, name, ac, hp, cr } = monsterData;

    return (
      <MonsterEntries
        key={id}
        initialMonsterData={{ name, ac, hp, cr }}
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
