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
    if (teams[playerA.team] === undefined) teams[playerA.team] = 0;
    if (teams[playerB.team] === undefined) teams[playerB.team] = 0;
    if (playerA.won) teams[playerA.team] += 1;
    if (playerB.won) teams[playerB.team] += 1;
  });
  return teams;
};
const numOfDefeatsEachTeam = (matchReport) => {
  const teams = {};
  matchReport.forEach((game) => {
    const { playerA, playerB } = game;
    if (teams[playerA.team] === undefined) teams[playerA.team] = 0;
    if (teams[playerB.team] === undefined) teams[playerB.team] = 0;
    if (playerA.won) teams[playerB.team] += 1;
    if (playerB.won) teams[playerA.team] += 1;
  });
  return teams;
};

// %
const percentagesWinsAndLosses = (matchReport, type) => {
  const totalGamesEachTeam = numOfGamesEachTeam(matchReport);
  const totalGamesWonByEachTeam = numOfWinsEachTeam(matchReport);
  const teamWinsPercentage = {};
  const teamDefeatsPercentage = {};

  const teams = Object.keys(totalGamesEachTeam);
  teams.forEach((team) => {
    const total = totalGamesEachTeam[team];
    const wins = totalGamesWonByEachTeam[team];
    if (type === "w")
      teamWinsPercentage[team] = Math.round((wins * 100) / total);
    else
      teamDefeatsPercentage[team] = Math.round(((total - wins) * 100) / total);
  });

  return type === "w" ? teamWinsPercentage : teamDefeatsPercentage;
};

//Streaks
const teamStreaks = (matchReport, result, team) => {
  const gameResults = matchReport.map((game) => {
    const { playerA, playerB } = game;
    if (playerA.team === team && playerA.won) return "W";
    if (playerA.team === team && !playerA.won) return "D";
    if (playerB.team === team && playerA.won) return "W";
    if (playerB.team === team) return "D";
  });

  let streak = 0;
  for (let res of gameResults) {
    if (res !== gameResults[0]) break;
    if (res === result) streak += 1;
  }
  console.log(streak);
  return streak > 1 ? streak - 1 : "none";
};

function TeamTable() {
  return (
    <div>
      <section className="TeamTable">
        <div className="wrapper__team-stats">
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
        </div>
        <div className="wrapper__team-stats Boston">
          <div className="items item--1">Boston</div>
          <div className="items item--2">
            {numOfGamesEachTeam(matchReport).Boston}
          </div>
          <div className="items item--3">
            {numOfWinsEachTeam(matchReport).Boston}
          </div>
          <div className="items item--4">
            {numOfDefeatsEachTeam(matchReport).Boston}
          </div>
          <div className="items item--6">
            {percentagesWinsAndLosses(matchReport, "w").Boston}%
          </div>
          <div className="items item--6">
            {percentagesWinsAndLosses(matchReport, "l").Boston}%
          </div>
          <div className="items item--6">Last 5 games</div>
          <div className="items item--6">
            {teamStreaks(matchReport, "W", "Boston")}
          </div>
          <div className="items item--6">
            {teamStreaks(matchReport, "D", "Boston")}
          </div>
          <div className="items item--6">Biggest win</div>
          <div className="items item--6">Biggest Defeat</div>
        </div>
      </section>
    </div>
  );
}

export default TeamTable;
