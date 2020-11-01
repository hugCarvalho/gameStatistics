import React from "react";
import "./App.scss";
import LastMatch from "./baseballHighlights/LastMatch/LastMatch";
import RenderTeamsTable from "./baseballHighlights/statistics/TeamStats/RenderTeamsTable";
import RenderPlayersStats from "./baseballHighlights/statistics/PlayerStats/RenderPlayersStats";
import matchReports from "./baseballHighlights/data/matchReports";
import RenderLostCities from "./lostCities/RenderLostCities";

function App() {
  return (
    <div className="App">
      <RenderLostCities />
      <LastMatch matchReports={matchReports} />
      <main>
        <RenderTeamsTable />
        <RenderPlayersStats />
      </main>
      <a href="https://www.counters-free.net/">https://www.counters-free.net</a>{" "}
    </div>
  );
}

export default App;
