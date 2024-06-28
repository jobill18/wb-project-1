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
      <table id="main-table">
        <thead>
          <th>Monsters</th>
          <th>Players</th>
        </thead>
        <tbody>
          <tr>
            <td>Estimated Encounter CR:</td>
            <td>Suggested CR:</td>
          </tr>
          <tr>
            <td>
              <MonsterList />
            </td>
            <td>
              <PlayerList />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
