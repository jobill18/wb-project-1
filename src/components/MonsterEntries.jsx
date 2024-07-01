import axios from "axios";
import { useState } from "react";
import React from "react";
import MonsterButtons from "./MonsterButtons";
import MonNameElement from "./MonNameElement";
import MonACElement from "./MonACElement";
import MonCRElement from "./MonCRElement";
import MonHPElement from "./MonHPElement";
import MonCHAElement from "./attribute_components/MonCHAElement";
import MonCONElement from "./attribute_components/MonCONElement";
import MonDEXElement from "./attribute_components/MonDEXElement";
import MonINTElement from "./attribute_components/MonINTElement";
import MonSTRElement from "./attribute_components/MonSTRElement";
import MonWISElement from "./attribute_components/MonWISElement";
import MonProfElement from "./MonProfElement";
import MonActionElement from "./MonActionElement";

function MonsterEntries({ initialMonsterData, initialIsEditing, onDeleteRow }) {
  //   const { ac, name, cr, hp } = initialMonsterData;
  const [isEditing, setIsEditing] = useState(initialIsEditing);
  const [ac, setAC] = useState(initialMonsterData.ac);
  const [name, setName] = useState(initialMonsterData.name);
  const [cr, setCR] = useState(initialMonsterData.cr);
  const [hp, setHP] = useState(initialMonsterData.hp);
  const [str, setStr] = useState(initialMonsterData.str);
  const [dex, setDex] = useState(initialMonsterData.dex);
  const [con, setCon] = useState(initialMonsterData.con);
  const [int, setInt] = useState(initialMonsterData.int);
  const [wis, setWis] = useState(initialMonsterData.wis);
  const [cha, setCha] = useState(initialMonsterData.cha);
  const [prof, setProf] = useState(initialMonsterData.prof);
  const [action, setAction] = useState(initialMonsterData.action);

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
          <th colSpan={4}>
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
      <tr>
        <MonSTRElement
          value={str}
          isEditing={isEditing}
          onValueChange={setStr}
        />
        <MonDEXElement
          value={dex}
          isEditing={isEditing}
          onValueChange={setDex}
        />
        <MonCONElement
          value={con}
          isEditing={isEditing}
          onValueChange={setCon}
        />
        <MonINTElement
          value={int}
          isEditing={isEditing}
          onValueChange={setInt}
        />
        <MonWISElement
          value={wis}
          isEditing={isEditing}
          onValueChange={setWis}
        />
        <MonCHAElement
          value={cha}
          isEditing={isEditing}
          onValueChange={setCha}
        />
      </tr>
      <tfoot>
        <tr>
          <td id="foot" colSpan={6}>
            <MonProfElement
              value={prof}
              isEditing={isEditing}
              onValueChange={setProf}
            />
          </td>
        </tr>
        <tr>
          <td id="foot" colSpan={6}>
            <MonActionElement
              value={action}
              isEditing={isEditing}
              onValueChange={setAction}
            />
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default MonsterEntries;
