import React from "react";
import "./App.scss";
import LastFixture from "./LastFixture/LastFixture";
import TeamTable from "./statistics/TeamStats/TeamsTable";
import PlayersStats from "./statistics/PlayerStats/PlayersStats";

function App() {
  return (
    <div className="App">
      <LastFixture />
      <main>
        <TeamTable />
        <PlayersStats />
      </main>
    </div>
  );
}

export default App;
