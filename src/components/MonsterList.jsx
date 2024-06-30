import { useState, useId } from "react";
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

  const newId = useId();

  const addMonsterEntry = () => {
    const newMonsterData = {
      id: newId,
      name: "Monster",
      cr: "",
      ac: "",
      hp: "",
      isEditing: true,
    };
    setInitialMonsterData([...initialMonsterData, newMonsterData]);
  };

  const deleteMonsterEntry = (id) => {
    const newMonsterData = [...initialMonsterData];
    const index = newMonsterData.findIndex((entry) => entry.id === id);
    newMonsterData.splice(index, 1);
    setInitialMonsterData(newMonsterData);
  };

  const monsterEntries = initialMonsterData.map((monsterData) => {
    const { id, name, ac, hp, cr } = monsterData;

    return (
      <MonsterEntries
        key={id}
        initialMonsterData={{ name, ac, hp, cr }}
        initialIsEditing={false}
        onDeleteRow={() => deleteMonsterEntry(id)}
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
        <MonsterAddEntry onClick={addMonsterEntry} />
      </tfoot>
    </table>
  );
}

export default MonsterList;
