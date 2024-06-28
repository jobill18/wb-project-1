import { useState } from "react";
import "./App.css";
import MonsterList from "./components/MonsterList";
import PlayerList from "./components/PlayerList";

const TEST_MONSTERS = [
  { id: 0, name: "Goblin 1", cr: 1 / 4, ac: 15, hp: 7 },
  { id: 1, name: "Goblin 2", cr: 1 / 4, ac: 15, hp: 7 },
  { id: 2, name: "Goblin 3", cr: 1 / 4, ac: 15, hp: 7 },
];

const TEST_PLAYERS = [
  { id: 0, name: "Player 1", level: 1, ac: 15, hp: 10 },
  { id: 1, name: "Player 2", level: 1, ac: 15, hp: 10 },
  { id: 2, name: "Player 3", level: 1, ac: 15, hp: 10 },
];

function App({ initialMonsterList }) {
  return (
    <>
      <h1>DnD Encounter Planner</h1>
      <p id="search-bar">
        <label htmlFor="search-input">Find a Monster: </label>
        <input type="text" name="search-input" id="search-input" />
        <button type="submit">search</button>
      </p>
      <table id="main-table">
        <thead>
          <tr>
            <th>Players</th>
            <th>Monsters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Suggested CR:</td>
            <td>Estimated Encounter CR:</td>
          </tr>
          <tr>
            <td>
              <PlayerList />
            </td>
            <td>
              <MonsterList />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
