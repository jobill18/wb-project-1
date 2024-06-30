import axios from "axios";
import { useState } from "react";
import React from "react";
import MonsterEntries from "./MonsterEntries";
import MonsterAddEntry from "./MonsterAddEntry";
import MonsterSearch from "./MonsterSearch";

function MonsterList({ initialMonsterList }) {
  const [initialMonsterData, setInitialMonsterData] =
    useState(initialMonsterList);

  const addMonsterEntry = async () => {
    const { data } = await axios.post("/api/monsters", {
      name: "",
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

  const monsterEntries = initialMonsterData.map((monsterData) => {
    const { id, name, ac, hp, cr, isEditing } = monsterData;

    return (
      <MonsterEntries
        key={id}
        initialMonsterData={{ id, name, ac, hp, cr }}
        initialIsEditing={isEditing}
        onDeleteRow={() => deleteMonsterEntry(id)}
      />
    );
  });

  return (
    <>
      <h1>DnD Encounter Planner</h1>
      <MonsterSearch />
      {monsterEntries}
      <MonsterAddEntry onClick={addMonsterEntry} />
    </>
  );
}

export default MonsterList;
