import React from "react";
import "./StatsPlayer.scss";
import matchReport from "./matchReports";
import playerStats from "../stats/StatsPlayerObj";

//put in teamsTable
const teams = ["Boston", "New York", "San Franciso", "Los Angeles"];

export const numOfGamesPlayedByPlayer = (matchResults, name) => {
  const playerAppearances = {};
  const players = matchResults.flatMap((res) => {
    return [res.playerA.name.toLowerCase(), res.playerB.name.toLowerCase()];
  });
  for (let player of players) {
    if (!playerAppearances[player]) playerAppearances[player] = 1;
    else playerAppearances[player] += 1;
  }
  // console.log("playerAppearances", playerAppearances);
  return playerAppearances[name.toLowerCase()];
};

const numOfVictories = (matchReport, name) => {
  return matchReport.filter((match) => {
    const { playerA, playerB } = match;
    return (
      (playerA.won && playerA.name.toLowerCase() === name.toLowerCase()) ||
      (playerB.won && playerB.name.toLowerCase() === name.toLowerCase())
    );
  }).length;
};

const calcWinningPerc = (matchReport, name) => {
  return Math.round(
    (numOfVictories(matchReport, name) * 100) /
      numOfGamesPlayedByPlayer(matchReport, name)
  );
};
//prettier-ignore
const calcDefeatsPerc = (matchReport, name) => 100 - calcWinningPerc(matchReport, name);

const biggestWin = (matchReport, name) => {
  const x = matchReport.filter((match) => {
    const { playerA, playerB } = match;
    return (
      (playerA.won && playerA.name.toLowerCase() === name.toLowerCase()) ||
      (playerB.won && playerB.name.toLowerCase() === name.toLowerCase())
    );
  });
  const opDefeats = x.map((item) => {
    console.log(item);
    return item.playerA[name].score || item.playerB[name.score];
  });
  console.log(opDefeats);
  return `4 - `;
};

function StatsPlayers() {
  return (
    <div className="player-stats">
      <section>
        <div className="items item--1" style={{ visibility: "hidden" }}>
          Coaches{" "}
        </div>
        <div className="items item--1">Team</div>
        <div className="items item--2">Games</div>
        <div className="items item--3">Wins</div>
        <div className="items item--4">Defeat</div>
        <div className="items item--5">Wins %</div>
        <div className="items item--6">Defeats %</div>
        <div className="items item--6">Last 5 games</div>
        <div className="items item--6">W streak</div>
        <div className="items item--6">L streak</div>
        <div className="items item--6">Biggest win</div>
        <div className="items item--6">Biggest Defeat</div>
      </section>

      <section className="wrapper">
        <div>Player 1</div>
        <div className="player">Hugo</div>
        <div className="player">{playerStats.hugo.games()}</div>
        <div className="player">{numOfVictories(matchReport, "Hugo")}</div>
        <div className="player">
          {numOfGamesPlayedByPlayer(matchReport, "Hugo") -
            numOfVictories(matchReport, "Hugo")}
        </div>
        <div className="player">{calcWinningPerc(matchReport, "Hugo")}</div>
        <div className="player">{calcDefeatsPerc(matchReport, "Hugo")}</div>
        <div className="player">{biggestWin(matchReport, "Hugo")}</div>
        <div className="player"></div>
        <div className="player"></div>
        <div className="player">{playerStats.hugo.games()}</div>
      </section>
    </div>
  );
}

export default StatsPlayers;
