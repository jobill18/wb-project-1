import "./App.css";
import MonsterList from "./components/MonsterList";
// import PlayerList from "./components/PlayerList";

function App({ initialMonsterList }) {
  return <MonsterList initialMonsterList={initialMonsterList} />;
}

export default App;
