import React from "react";
import "./App.scss";
// import LastFixture from "./LastFixture/LastFixture";
// import TeamTable from "./statistics/TeamStats/TeamsTable";
// import PlayersStats from "./statistics/PlayerStats/PlayersStats";
// import matchReports from "./data/matchReports";
import { lostCities } from "./data/lostCities";
import { LostCities } from "./lostCities/LostCities";

function App() {
  return (
    <div className="App">
      {/* <LastFixture matchReports={matchReports} />
      <main>
        <TeamTable />
        <PlayersStats />
      </main>
      <a href="https://www.counters-free.net/">https://www.counters-free.net</a>{" "} */}

      <LostCities />
    </div>
  );
}

export default App;
