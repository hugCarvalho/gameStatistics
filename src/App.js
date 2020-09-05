import React from "react";
import "./App.scss";
import matchReport from "./data/matchReports";
// import teamStats from "./stats/statsTeams";
import TeamTable from "./statistics/TeamStats/TeamsTable";
import StatsPlayers from "./statistics/PlayerStats/StatsPlayers";

function App() {
  const determineVictor = (matchReport = []) => {
    if (!matchReport.length) return;
    const { playerA } = matchReport[0];
    const { playerB } = matchReport[0];

    return playerA.won
      ? [playerA.team, playerA.score, playerB.score]
      : [playerB.team, playerB.score, playerA.score];
  };
  const victor = determineVictor(matchReport);
  // console.log(victor);

  //Destructured
  // const { playerA } = matchReport[0];
  // const { playerB } = matchReport[0];
  //const { totalGames } = statistics;

  const arrOfPlayers = (item) => {
    const names = item.flatMap((item) => [
      item.playerA.name,
      item.playerB.name,
    ]);
    return Array.from(new Set(names));
  };
  const arrayOfPlayers = arrOfPlayers(matchReport);

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <h1>Baseball Highlights Statistics</h1>
        </ul>

        {/* <time>{matchReport[0].date} </time> */}
        <time dateTime="2020-08-30"></time>
        {/* <p>
          The last match was between {playerA.team} coached by {playerA.name}{" "}
          and {playerB.team} coached by {playerB.name}.
        </p> */}
        <p>{/* {victor[0]} won by {victor[1]} to {victor[2]} */}</p>
        <ul>
          {/* <li>A total of {totalGames} games have been played.</li> */}
          <li>Number of players: {arrOfPlayers(matchReport).length} </li>
          <li>
            Name of players:{" "}
            {arrOfPlayers(matchReport).map((item, i) => (
              <span key={i}>{item} - </span>
            ))}{" "}
          </li>
          <li>{arrayOfPlayers[0]} has won </li>
        </ul>
      </header>
      <main>
        <TeamTable />
        <StatsPlayers />
      </main>
    </div>
  );
}

export default App;
