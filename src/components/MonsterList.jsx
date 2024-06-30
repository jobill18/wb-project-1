import axios from "axios";
import { useState, useId } from "react";
import React from "react";
import MonsterEntries from "./MonsterEntries";
import MonsterHeader from "./MonsterHeader";
import MonsterAddEntry from "./MonsterAddEntry";
import MonsterSearch from "./MonsterSearch";

function MonsterList() {
  const [initialMonsterData, setInitialMonsterData] = useState([
    { id: 0, name: "Goblin", cr: "1/4", ac: 15, hp: 7 },
  ]);

  const addMonsterEntry = async () => {
    const { data } = await axios.post("/api/monsters", {
      name: "Monster Name",
    });

    const newMonsterData = { ...data, isEditing: true };
    setInitialMonsterData([...initialMonsterData, newMonsterData]);
  };

  const deleteMonsterEntry = async (id) => {
    const { data } = await axios.delete(`/api/monsters/${id}/delete`);

    if (!data.error) {
      const newMonsterData = [...initialMonsterData];

      const index = newMonsterData.findIndex((entry) => entry.id === data.id);
      newMonsterData.splice(index, 1);
      setInitialMonsterData(newMonsterData);
    }
  };

  const monsterCRData = initialMonsterData.map((monsterData) => {
    const { cr } = monsterData;

    return;
  });

  const monsterEntries = initialMonsterData.map((monsterData) => {
    const { id, name, ac, hp, cr } = monsterData;

    return (
      <MonsterEntries
        key={id}
        initialMonsterData={{ id, name, ac, hp, cr }}
        initialIsEditing={false}
        onDeleteRow={() => deleteMonsterEntry(id)}
      />
    );
  });

  return (
    <>
      <MonsterSearch />
      <table id="main-table">
        <thead>
          <tr>
            <th>Creature</th>
            <th>Challenge</th>
            <th>Armor Rating</th>
            <th>Hit Points</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{monsterEntries}</tbody>
        <tfoot>
          <MonsterAddEntry onClick={addMonsterEntry} />
        </tfoot>
      </table>
    </>
  );
}

export default MonsterList;
