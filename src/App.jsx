import { useState } from "react";
import "./App.css";
import MonsterList from "./components/MonsterList";
// import PlayerList from "./components/PlayerList";

function App({ initialMonsterList }) {
  return (
    <>
      <h1>DnD Encounter Planner</h1>

      <MonsterList initialMonsterList={initialMonsterList} />
    </>
  );
}

export default App;
