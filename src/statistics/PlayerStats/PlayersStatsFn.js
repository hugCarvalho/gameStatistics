import matchReport from "../../data/matchReports";

//Total games
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

export const numOfVictories = (matchReport, name) => {
  return matchReport.filter((match) => {
    const { playerA, playerB } = match;
    return (
      (playerA.won && playerA.name.toLowerCase() === name.toLowerCase()) ||
      (playerB.won && playerB.name.toLowerCase() === name.toLowerCase())
    );
  }).length;
};

export const calcWinningPerc = (matchReport, name) => {
  const res = Math.round(
    (numOfVictories(matchReport, name) * 100) /
      numOfGamesPlayedByPlayer(matchReport, name)
  );
  return isNaN(res) ? 0 : res;
};
//prettier-ignore
export const calcDefeatsPerc = (matchReport, name) => {
  const totalGames = numOfGamesPlayedByPlayer(matchReport, name)
  const totalVictories = numOfVictories(matchReport, name)
  const totalDefeats = totalGames - totalVictories
 return  -
 !totalDefeats? 0 : 100 - calcWinningPerc(matchReport, name);
}

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

export const resultLast5Games = (matchReport, name) => {
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
  // console.log(object)
  return matches;
};
// console.log("resultLast5Matches", resultLast5Games(matchReport, "Hugo"));

export const calcPlayerStreaks = (resultLast5Games, gameResultType) => {
  const lastResults = resultLast5Games.reverse();
  let playerStreak = 0;
  for (let res of lastResults) {
    if (res !== gameResultType.toUpperCase()) break;
    else playerStreak += 1;
  }
  return playerStreak > 1 ? playerStreak : 0;
};
// console.log(winningStreak(resultLast5Games(matchReport, "Hugo")));

export const biggestWin = (matchReport, gameResultType, player) => {
  const allVictories = matchReport.filter((game) => {
    if (game.playerA.won && game.playerA.name === player) {
      return game;
    }
    if (game.playerB.won && game.playerB.name === player) {
      return game;
    }
  });
  // console.log("allVictories", allVictories);
  const opponentScores = allVictories.map((game) => {
    const { playerA, playerB } = game;
    if (!playerA.won) return playerA.score;
    else return playerB.score;
  });
  const biggestDif = Math.min(...opponentScores);

  return allVictories.length === 0 ? "-" : `4 - ${biggestDif}`;
};

export const biggestDefeat = (matchReport, gameResultType, player) => {
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

  return allDefeats.length === 0 ? "-" : `${biggestDif} - 4`;
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
  // console.log(obj);
  return Object.entries(obj);
};
export const teamStats = teamStatsPerPlayer(matchReport, "Hugo");

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
