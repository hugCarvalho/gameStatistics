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

//Victories
export const numOfVictories = (matchReport, name) => {
  return matchReport.filter((match) => {
    const { playerA, playerB } = match;
    return (
      (playerA.won && playerA.name.toLowerCase() === name.toLowerCase()) ||
      (playerB.won && playerB.name.toLowerCase() === name.toLowerCase())
    );
  }).length;
};

//Percentages
export const calcWinningPerc = (matchReport, name) => {
  const res = Math.round(
    (numOfVictories(matchReport, name) * 100) /
      numOfGamesPlayedByPlayer(matchReport, name)
  );
  return isNaN(res) ? 0 : res;
};

export const calcDefeatsPerc = (matchReport, name) => {
  const totalGames = numOfGamesPlayedByPlayer(matchReport, name);
  const totalVictories = numOfVictories(matchReport, name);
  const totalDefeats = totalGames - totalVictories;
  return !totalDefeats ? 0 : 100 - calcWinningPerc(matchReport, name);
};

//Last 5 results
export const resultLast5Games = (matchReport, name) => {
  const matchesResults = matchReport.flatMap((match) => {
    const matchResult = [];
    if (match.playerA.name.toLowerCase() === name.toLowerCase()) {
      if (match.playerA.won) matchResult.push("W");
      else matchResult.push("D");
    }
    if (match.playerB.name.toLowerCase() === name.toLowerCase()) {
      if (match.playerB.won) matchResult.push("W");
      else matchResult.push("D");
    }
    return matchResult.length > 5 ? matchResult.slice(0, 5) : matchResult;
  });
  return matchesResults.length > 5
    ? matchesResults.reverse().slice(0, 5)
    : matchesResults.reverse();
};

//Streaks
export const calcPlayerStreaks = (resultLast5Games, gameResultType) => {
  const lastResults = resultLast5Games;
  let playerStreak = 0;
  for (let res of lastResults) {
    if (res !== gameResultType.toUpperCase()) break;
    else playerStreak += 1;
  }
  return playerStreak > 1 ? playerStreak : 0;
};

//Biggest Win
export const biggestWin = (matchReport, gameResultType, player) => {
  const allVictories = matchReport.filter((game) => {
    return (
      (game.playerA.won && game.playerA.name === player) ||
      (game.playerB.won && game.playerB.name === player)
    );
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

//Biggest Defeat
export const biggestDefeat = (matchReport, gameResultType, player) => {
  const allDefeats = matchReport.filter((game) => {
    return (
      (!game.playerA.won && game.playerA.name === player) ||
      (!game.playerB.won && game.playerB.name === player)
    );
  });

  const playerScores = allDefeats.map((game) => {
    const { playerA, playerB } = game;
    if (!playerA.won) return playerA.score;
    else return playerB.score;
  });

  const biggestDif = Math.min(...playerScores);

  return allDefeats.length === 0 ? "-" : `${biggestDif} - 4`;
};

//Team stats per player
export const teamStatsPerPlayer = (matchReport, player) => {
  const allGamesPlayer = matchReport.map((game) => {
    if (game.playerA.name === player) return game.playerA;
    else return game.playerB;
  });
  console.log("allGamesPlayer", allGamesPlayer);
  let obj = {
    Boston: { played: 0, won: 0, lost: 0 },
    "Los Angeles": { played: 0, won: 0, lost: 0 },
    "New York": { played: 0, won: 0, lost: 0 },
    "San Francisco": { played: 0, won: 0, lost: 0 },
  };
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
