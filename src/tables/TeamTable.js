import React from "react";
import "./TeamTable.scss";
import matchReport from "../stats/matchReports";
import teamStats from "../stats/statsTeams";
// import playersStats from "../stats/statsPlayers";
// import StatsTeam from "../stats/statsTeams";

//TODOS PRIORiTIES
//TODO: move fn to dedicated file && refactor them
//TODO: make reusable component for each team
//TODO: make graph
//TODO: add styling

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
export const teamStreaksAndLast5Results = (matchReport, gameResult, team) => {
  const gameResults = matchReport
    .map((game) => {
      const { playerA, playerB } = game;
      console.log("playerA.team", playerA.team);
      console.log("playerA.won", playerA.won);
      console.log("team", team);
      console.log("----------");
      if (playerA.team === team && playerA.won) return "W";
      else if (playerA.team === team && playerB.won) return "D";
      else if (playerB.team === team && playerA.won) return "D";
      else return "W";
    })
    .filter((item) => item);

  let streak = 0;
  for (let res of gameResults) {
    if (res !== gameResults[0]) break;
    if (res === gameResult) streak += 1;
  }
  console.log("GAME RESULTS:->", gameResults);
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

        {/* Boston */}
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

        {/* San Francisco */}
        <div className="wrapper__team-stats San Francisco">
          <div className="items item--1">San Francisco</div>
          <div className="items item--2">
            {numOfGamesEachTeam(matchReport)["San Francisco"]}
          </div>
          <div className="items item--3">
            {numOfWinsEachTeam(matchReport)["San Francisco"]}
          </div>
          <div className="items item--4">
            {numOfDefeatsEachTeam(matchReport)["San Francisco"]}
          </div>
          <div className="items item--6">
            {percentagesWinsAndLosses(matchReport, "w")["San Francisco"]}%
          </div>
          <div className="items item--6">
            {percentagesWinsAndLosses(matchReport, "l")["San Francisco"]}%
          </div>
          <div className="items item--6">
            {teamStreaksAndLast5Results(matchReport, null, "San Francisco")[1]}
          </div>
          <div className="items item--6">
            {teamStreaksAndLast5Results(matchReport, "W", "San Francisco")[0]}
          </div>
          <div className="items item--6">
            {teamStreaksAndLast5Results(matchReport, "D", "San Francisco")[0]}
          </div>
          <div className="items item--6">
            {teamResults(matchReport, "San Francisco", "W")}
          </div>
          <div className="items item--6">
            {teamResults(matchReport, "San Francisco", "D")}
          </div>
        </div>

        {/* New York */}
        <div className="wrapper__team-stats New York">
          <div className="items item--1">New York</div>
          <div className="items item--2">
            {numOfGamesEachTeam(matchReport)["New York"]}
          </div>
          <div className="items item--3">
            {numOfWinsEachTeam(matchReport)["New York"]}
          </div>
          <div className="items item--4">
            {numOfDefeatsEachTeam(matchReport)["New York"]}
          </div>
          <div className="items item--6">
            {percentagesWinsAndLosses(matchReport, "w")["New York"]}%
          </div>
          <div className="items item--6">
            {percentagesWinsAndLosses(matchReport, "l")["New York"]}%
          </div>
          <div className="items item--6">
            {teamStreaksAndLast5Results(matchReport, null, "New York")[1]}
          </div>
          <div className="items item--6">
            {teamStreaksAndLast5Results(matchReport, "W", "New York")[0]}
          </div>
          <div className="items item--6">
            {teamStreaksAndLast5Results(matchReport, "D", "New York")[0]}
          </div>
          <div className="items item--6">
            {teamResults(matchReport, "New York", "W")}
          </div>
          <div className="items item--6">
            {teamResults(matchReport, "New York", "D")}
          </div>
        </div>

        {/* Los Angeles */}
        <div className="wrapper__team-stats Los Angeles">
          <div className="items item--1">Los Angeles</div>
          <div className="items item--2">
            {numOfGamesEachTeam(matchReport)["Los Angeles"]}
          </div>
          <div className="items item--3">
            {numOfWinsEachTeam(matchReport)["Los Angeles"]}
          </div>
          <div className="items item--4">
            {numOfDefeatsEachTeam(matchReport)["Los Angeles"]}
          </div>
          <div className="items item--6">
            {percentagesWinsAndLosses(matchReport, "w")["Los Angeles"]}%
          </div>
          <div className="items item--6">
            {percentagesWinsAndLosses(matchReport, "l")["Los Angeles"]}%
          </div>
          <div className="items item--6">
            {teamStreaksAndLast5Results(matchReport, null, "Los Angeles")[1]}
          </div>
          <div className="items item--6">
            {teamStreaksAndLast5Results(matchReport, "W", "Los Angeles")[0]}
          </div>
          <div className="items item--6">
            {teamStreaksAndLast5Results(matchReport, "D", "Los Angeles")[0]}
          </div>
          <div className="items item--6">
            {teamResults(matchReport, "Los Angeles", "W")}
          </div>
          <div className="items item--6">
            {teamResults(matchReport, "Los Angeles", "D")}
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamTable;
