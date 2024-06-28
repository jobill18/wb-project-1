import React from "react";
import MonsterButtons from "./MonsterButtons";
import MonsterBtnMoveEntry from "./MonsterBtnMoveEntry";
import MonNameElement from "./MonNameElement";
import MonACElement from "./MonACElement";
import MonCRElement from "./MonCRElement";
import MonHPElement from "./MonHPElement";

function MonsterEntries({ initialTableData, initialIsEditing }) {
  const { ac, name, cr, hp } = initialTableData;

  return (
    <tr>
      <MonsterBtnMoveEntry />
      <MonNameElement value={name} isEditing={initialIsEditing} />
      <MonCRElement value={cr} isEditing={initialIsEditing} />
      <MonACElement value={ac} isEditing={initialIsEditing} />
      <MonHPElement value={hp} isEditing={initialIsEditing} />
      <MonsterButtons isEditing={initialIsEditing} />
    </tr>
  );
}

export default MonsterEntries;
