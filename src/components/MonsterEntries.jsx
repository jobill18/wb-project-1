import axios from "axios";
import { useState } from "react";
import React from "react";
import MonsterButtons from "./MonsterButtons";
import MonNameElement from "./MonNameElement";
import MonACElement from "./MonACElement";
import MonCRElement from "./MonCRElement";
import MonHPElement from "./MonHPElement";

function MonsterEntries({ initialMonsterData, initialIsEditing, onDeleteRow }) {
  //   const { ac, name, cr, hp } = initialMonsterData;
  const [isEditing, setIsEditing] = useState(initialIsEditing);
  const [ac, setAC] = useState(initialMonsterData.ac);
  const [name, setName] = useState(initialMonsterData.name);
  const [cr, setCR] = useState(initialMonsterData.cr);
  const [hp, setHP] = useState(initialMonsterData.hp);
  const setEditMode = () => setIsEditing(true);
  const setNormalMode = async () => {
    const { data } = await axios.put(`/api/monsters/${initialMonsterData.id}`, {
      name,
      cr,
      ac,
      hp,
    });

    if (!data.error) {
      setName(data.name);
      setCR(data.cr);
      setAC(data.ac);
      setHP(data.hp);
    }

    setIsEditing(false);
  };

  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>
            <MonNameElement
              value={name}
              isEditing={isEditing}
              onValueChange={setName}
            />
          </th>

          <MonsterButtons
            isEditing={isEditing}
            onEditClick={setEditMode}
            onSaveClick={setNormalMode}
            onRemoveClick={onDeleteRow}
          />
        </tr>
      </thead>
      <tr>
        <MonCRElement value={cr} isEditing={isEditing} onValueChange={setCR} />
        <MonACElement value={ac} isEditing={isEditing} onValueChange={setAC} />
        <MonHPElement value={hp} isEditing={isEditing} onValueChange={setHP} />
      </tr>
    </table>
  );
}

export default MonsterEntries;
