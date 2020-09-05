import React from "react";
import "./StatsPlayer.scss";
import matchReport from "../../data/matchReports";
import playerStats from "./StatsPlayerObj";
import { Bar } from "react-chartjs-2";

//TODO: put functions in separate file
//TODO: refactor

//put in teamsTable
const teams = ["Boston", "New York", "San Franciso", "Los Angeles"];

const data = {
  labels: ["Hugo", "Eddie"],

  datasets: [
    {
      order: 0,
      barPercentage: 0.5,
      minBarLength: 50,
      label: "WINS",
      data: [2, 4, 9],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 5,
    },
    {
      label: "DEFEATS",
      data: [1, 3, 6],
    },
  ], //array of objects, each object corresponds to a line in the chart
};

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
  return playerAppearances[name.toLowerCase()] || 0;
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

// const biggestWin = (matchReport, name) => {
//   const x = matchReport.filter((match) => {
//     const { playerA, playerB } = match;
//     return (
//       (playerA.won && playerA.name.toLowerCase() === name.toLowerCase()) ||
//       (playerB.won && playerB.name.toLowerCase() === name.toLowerCase())
//     );
//   });
//   console.log("x:!!!!", x);
//   const opDefeats = x.map((item) => {
//     console.log(item);
//     return item.playerA.score || item.playerB.score;
//   });
//   console.log(opDefeats);
//   return `4 - `;
// };

const resultLast5Games = (matchReport, name) => {
  const matches = matchReport.flatMap((item) => {
    const matchResult = [];
    if (item.playerA.name.toLowerCase() === name.toLowerCase()) {
      if (item.playerA.won) matchResult.push("W");
      else matchResult.push("D");
    }
    if (item.playerB.name.toLowerCase() === name.toLowerCase()) {
      if (item.playerB.won) matchResult.push("W");
      else matchResult.push("D");
    }
    return matchResult;
  });
  return matches;
};
// console.log("resultLast5Matches", resultLast5Games(matchReport, "Hugo"));

const calcPlayerStreaks = (resultLast5Games, gameResultType) => {
  const lastResults = resultLast5Games.reverse();
  let playerStreak = 0;
  for (let res of lastResults) {
    if (res !== gameResultType.toUpperCase()) break;
    else playerStreak += 1;
  }
  return playerStreak > 1 ? playerStreak : 0;
};
// console.log(winningStreak(resultLast5Games(matchReport, "Hugo")));

const biggestWin = (matchReport, gameResultType, player) => {
  const allVictories = matchReport.filter((game) => {
    if (game.playerA.won && game.playerA.name === player) {
      return game;
    }
    if (game.playerB.won && game.playerB.name === player) {
      return game;
    }
  });
  console.log("allVictories", allVictories);
  const opponentScores = allVictories.map((game) => {
    const { playerA, playerB } = game;
    if (!playerA.won) return playerA.score;
    else return playerB.score;
  });
  const biggestDif = Math.min(...opponentScores);

  if (!allVictories) console.log("NOOOOOOOOOOOOOOOOO");
  if (allVictories) console.log("YEEEEEEEEEEEEEEES");

  return allVictories.length === 0 ? "---" : `4 - ${biggestDif}`;
};

const biggestDefeat = (matchReport, gameResultType, player) => {
  const allDefeats = matchReport.filter((game) => {
    if (!game.playerA.won && game.playerA.name === player) return game;
    if (!game.playerB.won && game.playerB.name === player) return game;
  });

  const playerScores = allDefeats.map((game) => {
    const { playerA, playerB } = game;
    if (!playerA.won) return playerA.score;
    else return playerB.score;
  });

  const biggestDif = Math.min(...playerScores);

  return allDefeats.length === 0 ? "---" : `${biggestDif} - 4`;
};

const teamStatsPerPlayer = (matchReport, player) => {
  const allGamesPlayer = matchReport.map((game) => {
    if (game.playerA.name === player) return game.playerA;
    if (game.playerB.name === player) return game.playerB;
  });
  let obj = {};
  allGamesPlayer.forEach((data) => {
    const { team, won } = data;
    if (!obj[team]) obj[team] = { played: 0, won: 0, lost: 0 };
    obj[team] = {
      played: obj[team].played + 1,
      won: won ? obj[team].won + 1 : obj[team].won,
      lost: !won ? obj[team].lost + 1 : obj[team].lost,
    };
  });
  console.log(obj);
  return Object.entries(obj);
};
const teamStats = teamStatsPerPlayer(matchReport, "Hugo");

// console.log(
//   "x",
//   x.map((item) => item)
// );
// const test = Object.keys(teamStatsPerPlayer(matchReport, "Hugo"));
// console.log(test);
// const gameWonWithTeam = () => (matchReport, player, team) {
//   const allVictories = matchReport.filter((game) => {
//     if (game.playerA.won && game.playerA.name === player) {
//       return game;
//     }
//     if (game.playerB.won && game.playerB.name === player) {
//       return game;
//     }
//   });
//   const teamStatistics
// }

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
        <div className="items item--6"></div>
        <div className="items item--6"></div>
        <div className="items item--6"></div>
        <div className="items item--6"></div>
      </section>

      <section className="wrapper">
        <div>Hugo</div>
        <div className="player">Total</div>
        <div className="player">{playerStats.hugo.games()}</div>
        <div className="player">{numOfVictories(matchReport, "Hugo")}</div>
        <div className="player">
          {numOfGamesPlayedByPlayer(matchReport, "Hugo") -
            numOfVictories(matchReport, "Hugo")}
        </div>
        <div className="player">{calcWinningPerc(matchReport, "Hugo")}%</div>
        <div className="player">{calcDefeatsPerc(matchReport, "Hugo")}%</div>
        <div className="player">{resultLast5Games(matchReport, "Hugo")}</div>
        <div className="player">
          {calcPlayerStreaks(resultLast5Games(matchReport, "Hugo"), "W")}
        </div>
        <div className="player">
          {calcPlayerStreaks(resultLast5Games(matchReport, "Hugo"), "D")}
        </div>
        <div className="player">{biggestWin(matchReport, "W", "Hugo")}</div>
        <div className="player">
          BD{biggestDefeat(matchReport, "D", "Hugo")}
        </div>
        {/* <div className="items item--6">
          {teamStatsPerPlayer(matchReport, "Hugo")}
        </div> */}
      </section>
      {/* EXTENDED  */}
      {teamStats.map((item, i) => {
        return (
          <section key={i}>
            <div>a</div>
            <div>{item[0]}</div>
            <div>{item[1].played}</div>
            <div>{item[1].won}</div>
            <div>{item[1].lost}</div>
            {/* <div>{item[1].won}</div>
            <div>{item[1].lost}</div> */}
          </section>
        );
      })}
      {/* {<Bar data={data} />} */}
    </div>
  );
}

export default StatsPlayers;
