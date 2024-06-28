import React from "react";

function MonNameElement({ value, isEditing }) {
  return isEditing ? (
    <td>
      <input type="text" value={value} />
    </td>
  ) : (
    <td>{value}</td>
  );
}

export default MonNameElement;
