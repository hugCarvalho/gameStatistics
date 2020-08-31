import React from "react";
import "./TeamTable.scss";
import matchReport from "../stats/matchReports";
// import playersStats from "../stats/statsPlayers";
// import StatsTeam from "../stats/statsTeams";

// const teamStats = {
//   Boston: {
//     games: 0,
//     numOfWins: 0,
//     numOfDefeats: 0,
//     biggestWin: [],
//     biggestLoss: [],
//     winningStreak: 0,
//     losingStreak: 0,
//     LosAngeles: [],
//     SanFrancisco: [],
//     NewYork: [["w", 4, 0]], //Win || Loss, Boston,NewYork
//   },
// };

export const numOfGamesEachTeam = (reports) => {
  const obj = {};
  const teams = reports.flatMap((item) => {
    return [item.playerA.team, item.playerB.team];
  });

  for (let team of teams) {
    if (!obj[team]) obj[team] = 1;
    else obj[team] += 1;
  }
  return obj;
};
// numOfGamesEachTeam(matchReport);

const numOfWinsEachTeam = (matchReport) => {
  const teams = {};
  matchReport.forEach((game) => {
    const { playerA, playerB } = game;
    if (playerA.won) {
      teams[playerA.team]
        ? (teams[playerA.team] += 1)
        : (teams[playerA.team] = 1);
    } else {
      teams[playerB.team]
        ? (teams[playerB.team] += 1)
        : (teams[playerB.team] = 1);
    }
  });
  // console.log("RES", res, "TEAMS:", teams);
  return teams;
};
numOfWinsEachTeam(matchReport);

function TeamTable() {
  return (
    <div>
      <section className="TeamTable">
        <div className="wrapper__team-stats">
          <div className="items item--1">Team</div>
          <div className="items item--2">Games</div>
          <div className="items item--3">Wins</div>
          <div className="items item--4">Defeat</div>
          <div className="items item--5">Defeat</div>
          <div className="items item--6">% win</div>
          <div className="items item--6">% Defeat</div>
          <div className="items item--6">winning streak</div>
          <div className="items item--6">losing streak</div>
          <div className="items item--6">Biggest win</div>
          <div className="items item--6">Biggest Defeat</div>
        </div>
        <div className="wrapper__team-stats Boston">
          <div className="items item--1">Boston</div>
          <div className="items item--2">
            {numOfGamesEachTeam(matchReport).Boston}
          </div>
          <div className="items item--3">
            hee:{numOfWinsEachTeam(matchReport).Boston}
          </div>
          <div className="items item--4">Defeat</div>
          <div className="items item--5">Defeat</div>
          <div className="items item--6">% win</div>
          <div className="items item--6">% Defeat</div>
          <div className="items item--6">winning streak</div>
          <div className="items item--6">losing streak</div>
          <div className="items item--6">Biggest win</div>
          <div className="items item--6">Biggest Defeat</div>
        </div>
      </section>
    </div>
  );
}

export default TeamTable;
