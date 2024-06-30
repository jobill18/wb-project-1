import { useState } from "react";
import "./App.css";
import MonsterList from "./components/MonsterList";
// import PlayerList from "./components/PlayerList";

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
            {/* <th>Players</th> */}
            <th>Monsters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <td>Suggested CR:</td> */}
            <td>Estimated Encounter CR:</td>
          </tr>
          <tr>
            {/* <td><PlayerList /></td> */}
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
