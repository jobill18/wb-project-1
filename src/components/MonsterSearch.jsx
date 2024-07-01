import axios from "axios";
import { React, useState, useEffect } from "react";
import MonSearchResults from "./MonsterSearchResults";

function MonsterSearch() {
  return (
    <p>
      <input
        type="text"
        id="monsterInput"
        placeholder="Enter a creature name"
      />
      <button id="searchButton">Search</button>
      <div id="monsterResult" class="monster-result">
        <MonSearchResults />
      </div>
    </p>
  );
}

export default MonsterSearch;
