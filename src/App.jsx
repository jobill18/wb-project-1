import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MonsterList from "./components/MonsterList";
import PlayerList from "./components/PlayerList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>DnD Encounter Planner</h1>
      <table>
        <thead>
          <th>Monsters</th>
          <th>Players</th>
        </thead>
        <tbody>
          <td>
            <MonsterList />
          </td>
          <td>
            <PlayerList />
          </td>
        </tbody>
      </table>
    </>
  );
}

export default App;
