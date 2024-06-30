import axios from "axios";
import { React, useState, useEffect } from "react";
import MonSearchResults from "./MonSearchResults";

function MonsterSearch() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);

  const fetchData = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchParameters = Object.keys(Object.assign({}, ...data));

  const search = (data) => {
    return data.filter((data) =>
      searchParameters.some((param) =>
        data[param].toString().toLowerCase().includes(searchQuery)
      )
    );
  };

  return (
    <>
      <p id="search-bar">
        <label htmlFor="search-input">Find a Creature: </label>
        <input
          type="search"
          name="search-input"
          id="search-input"
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Creatures"
        />
        <button type="submit">search</button>
      </p>
      <MonSearchResults />
    </>
  );
}

export default MonsterSearch;
