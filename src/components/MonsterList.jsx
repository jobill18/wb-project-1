import axios from "axios";
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
      <p id="search-bar">
        <label htmlFor="search-input">Find a Monster: </label>
        <input type="text" name="search-input" id="search-input" />
        <button type="submit">search</button>
      </p>
      <table id="main-table">
        <thead>
          <tr>
            {/* <th>Players</th> */}
            <th>Monsters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <td>Suggested CR:</td> */}
            <td>Estimated Encounter CR: {}</td>
          </tr>
          <tr>
            {/* <td><PlayerList /></td> */}
            <td>
              <table>
                <thead>
                  <MonsterHeader />
                </thead>
                <tbody>{monsterEntries}</tbody>
                <tfoot>
                  <MonsterAddEntry onClick={addMonsterEntry} />
                </tfoot>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default MonsterList;
