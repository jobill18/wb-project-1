import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MonsterList from "./components/MonsterList";
import PlayerList from "./components/PlayerList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <table>
      <tbody>
        <td>
          <MonsterList />
        </td>
        <td>
          <PlayerList />
        </td>
      </tbody>
    </table>
  );
}

export default App;
