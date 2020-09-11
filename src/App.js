import React from "react";
import "./App.scss";
import LastFixture from "./LastFixture/LastFixture";
import TeamTable from "./statistics/TeamStats/TeamsTable";
import PlayersStats from "./statistics/PlayerStats/PlayersStats";
import matchReports from "./data/matchReports";

function App() {
  return (
    <div className="App">
      <LastFixture matchReports={matchReports} />
      <main>
        <TeamTable />
        <PlayersStats />
      </main>
      <a href="https://www.counters-free.net/">https://www.counters-free.net</a>{" "}
      <script
        type="text/javascript"
        src="https://www.freevisitorcounters.com/auth.php?id=fb5edd82ad0ef336f64829a20662a951acbfbbbc"></script>
      <script
        type="text/javascript"
        src="https://www.freevisitorcounters.com/en/home/counter/744240/t/2"></script>
    </div>
  );
}

export default App;
