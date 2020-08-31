import React from "react";
import "./TeamTable.scss";
import matchReport from "../stats/matchReports";
import teamStats from "../stats/statsTeams";
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
const teamStreaksAndLast5Results = (matchReport, result, team) => {
  const gameResults = matchReport
    .map((game) => {
      const { playerA, playerB } = game;
      if (playerA.team === team && playerA.won) return "W";
      else if (playerA.team === team && !playerA.won) return "D";
      else if (playerB.team === team && playerA.won) return "W";
      else return "D";
    })
    .filter((item) => item);

  let streak = 0;
  for (let res of gameResults) {
    if (res !== gameResults[0]) break;
    if (res === result) streak += 1;
  }
  // console.log(gameResults);
  //A streak must be at least 2 to be considered a streak, a single res is not enough
  return streak > 1 ? [streak - 1, gameResults] : ["none", gameResults];
};
// console.log(teamStreaksAndLast5Results(matchReport, "W", "Los Angeles"));

const teamResults = (matchReport, team, type) => {
  const res = matchReport.map((game) => {
    const { team: teamA, score: scoreA } = game.playerA;
    const { team: teamB, score: scoreB } = game.playerB;
    // const { teamB, scoreB } = game.playerB;
    return [
      [teamA, scoreA],
      [teamB, scoreB],
    ]; //, teamB, scoreB];
  });

  const won = res.filter(
    (item) =>
      (item[0][0] === team && item[0][1] === 4) ||
      (item[1][0] === team && item[1][1] === 4)
  );
  const lost = res.filter(
    (item) =>
      (item[0][0] === team && item[0][1] < 4) ||
      (item[1][0] === team && item[1][1] < 4)
  );
  // const lost = res.filter((item) => item[0][0] === team && item[0][1] < 4);
  const opponentMinScore = Math.min(
    ...won.map((item) => typeof item === "number")
  );
  const teamMinScore = lost.flatMap((item, i) => [item[0][1], item[1][1]]);
  const WTF = Math.min(...teamMinScore);
  return type === "W" ? `4 - ${opponentMinScore}` : `${WTF} - 4`;
};
teamResults(matchReport, "Boston");

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
          <div className="items item--6">
            {teamStreaksAndLast5Results(matchReport, null, "Boston")[1]}
          </div>
          <div className="items item--6">
            {teamStreaksAndLast5Results(matchReport, "W", "Boston")[0]}
          </div>
          <div className="items item--6">
            {teamStreaksAndLast5Results(matchReport, "D", "Boston")[0]}
          </div>
          <div className="items item--6">
            {teamResults(matchReport, "Boston", "W")}
          </div>
          <div className="items item--6">
            {teamResults(matchReport, "Boston", "D")}
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamTable;
