import React from "react";
import "./LastFixture.scss";
import matchReport from "../data/matchReports";
// import teamStats from "./stats/statsTeams";

function LastFixture() {
  // const determineVictor = (matchReport = []) => {
  //   if (!matchReport.length) return;
  //   const { playerA } = matchReport[0];
  //   const { playerB } = matchReport[0];

  //   return playerA.won
  //     ? [playerA.team, playerA.score, playerB.score]
  //     : [playerB.team, playerB.score, playerA.score];
  // };
  // const victor = determineVictor(matchReport);
  // console.log(victor);
  // const arrOfPlayers = (item) => {
  //   const names = item.flatMap((item) => [item.playerA.name, item.playerB.name]);
  //   return Array.from(new Set(names));
  // };
  // const array = arrOfPlayers(matchReport);
  // console.log(array);

  const lastMatch = matchReport[matchReport.length - 1];
  console.log(matchReport[lastMatch]);
  return (
    <header className="App-header">
      <h1>Baseball Highlights Statistics</h1>
      <h3>
        Last fixture: <time dateTime="2020-08-30">{lastMatch.date}</time>
      </h3>
      <section>
        <div className="wrapper__all">
          <div className="info">
            <span>{lastMatch.playerA.name}</span>
            <span>{lastMatch.playerA.team}</span>
            <span>{lastMatch.playerA.score}</span>
          </div>
          <div> Vs </div>
          <div className="info">
            <span>{lastMatch.playerB.name}</span>
            <span>{lastMatch.playerB.team}</span>
            <span>{lastMatch.playerB.score}</span>
          </div>
        </div>
      </section>
      {/* <p>
          The last match was between {playerA.team} coached by {playerA.name}{" "}
          and {playerB.team} coached by {playerB.name}.
        </p> */}
      <p>{/* {victor[0]} won by {victor[1]} to {victor[2]} */}</p>
      <ul>
        {/* <li>A total of {totalGames} games have been played.</li> */}
        {/* <li>Number of players: {arrOfPlayers(matchReport).length} </li> */}
        {/* <li>
          Name of players:{" "}
          {arrOfPlayers(matchReport).map((item, i) => (
            <span key={i}>{item} - </span>
          ))}{" "}
        </li> */}
        {/* <li>{arrayOfPlayers[0]} has trashed  </li> */}
      </ul>
    </header>
  );
}

export default LastFixture;
