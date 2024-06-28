import { useState } from "react";
import React from "react";
import MonsterButtons from "./MonsterButtons";
import MonsterBtnMoveEntry from "./MonsterBtnMoveEntry";
import MonNameElement from "./MonNameElement";
import MonACElement from "./MonACElement";
import MonCRElement from "./MonCRElement";
import MonHPElement from "./MonHPElement";

function MonsterEntries({ initialMonsterData, initialIsEditing }) {
  //   const { ac, name, cr, hp } = initialMonsterData;
  const [isEditing, setIsEditing] = useState(initialIsEditing);
  const [ac, setAC] = useState(initialMonsterData.ac);
  const [name, setName] = useState(initialMonsterData.name);
  const [cr, setCR] = useState(initialMonsterData.cr);
  const [hp, setHP] = useState(initialMonsterData.hp);
  const setEditMode = () => setIsEditing(true);
  const setNormalMode = () => setIsEditing(false);

  return (
    <tr>
      <MonsterBtnMoveEntry />
      <MonNameElement
        value={name}
        isEditing={isEditing}
        onValueChange={setName}
      />
      <MonCRElement value={cr} isEditing={isEditing} onValueChange={setCR} />
      <MonACElement value={ac} isEditing={isEditing} onValueChange={setAC} />
      <MonHPElement value={hp} isEditing={isEditing} onValueChange={setHP} />
      <MonsterButtons
        isEditing={isEditing}
        onEditClick={setEditMode}
        onSaveClick={setNormalMode}
      />
    </tr>
  );
}

export default MonsterEntries;
