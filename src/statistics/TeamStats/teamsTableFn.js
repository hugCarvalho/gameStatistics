//GAMES EACH TEAM
export const numOfGamesEachTeam = (matchResults, teamName) => {
  const teamAppearances = {};

  const teams = matchResults.flatMap((res) => {
    return [res.playerA.team, res.playerB.team];
  });

  for (let team of teams) {
    if (!teamAppearances[team]) teamAppearances[team] = 1;
    else teamAppearances[team] += 1;
  }

  return teamAppearances[teamName] || 0;
};

//WINS AND DEFEATS EACH TEAM
export const numOfWinsEachTeam = (matchReport, teamName) => {
  const teamsVictories = {};

  matchReport.forEach((game) => {
    const { playerA, playerB } = game;
    if (!teamsVictories[playerA.team]) teamsVictories[playerA.team] = 0;
    if (!teamsVictories[playerB.team]) teamsVictories[playerB.team] = 0;
    if (playerA.won) teamsVictories[playerA.team] += 1;
    if (playerB.won) teamsVictories[playerB.team] += 1;
  });

  return teamsVictories[teamName] || 0;
};

export const numOfDefeatsEachTeam = (matchReport, teamName) => {
  const teamsDefeats = {};

  matchReport.forEach((game) => {
    const { playerA, playerB } = game;
    if (!teamsDefeats[playerA.team]) teamsDefeats[playerA.team] = 0;
    if (!teamsDefeats[playerB.team]) teamsDefeats[playerB.team] = 0;
    if (playerA.won) teamsDefeats[playerB.team] += 1;
    if (playerB.won) teamsDefeats[playerA.team] += 1;
  });

  return teamsDefeats[teamName] || 0;
};

//% WINS AND LOSSES
export const percentagesWinsAndLosses = (matchReport, matchResult, name) => {
  const totalGames = numOfGamesEachTeam(matchReport, name);
  const totalGamesWon = numOfWinsEachTeam(matchReport, name);
  const totalGamesLost = numOfDefeatsEachTeam(matchReport, name);

  if (matchResult.toLowerCase() === "w") {
    return totalGamesWon ? Math.round((totalGamesWon * 100) / totalGames) : 0;
  } else {
    return totalGamesLost ? Math.round((totalGamesLost * 100) / totalGames) : 0;
  }
};

//Streaks
export const teamStreaksAndLast5Results = (matchReport, matchResult, team) => {
  let teamStreak = 0;

  let gameResults = matchReport
    .map((game) => {
      const { playerA, playerB } = game;
      if (playerA.team === team && playerA.won) return "W";
      else if (playerA.team === team && playerB.won) return "D";
      else if (playerB.team === team && playerA.won) return "D";
      else if (playerB.team === team && playerB.won) return "W";
      else return null;
    })
    .filter((item) => item)
    .reverse();

  if (gameResults.length === 0) return "--";

  console.log("GR", gameResults);
  for (let res of gameResults) {
    //A streak starts counting after 2 consecutive wins
    if (res !== gameResults[0]) break;
    if (res === matchResult) teamStreak += 1;
    console.log(team, teamStreak);
  }

  gameResults = gameResults.length > 5 ? gameResults.slice(0, 5) : gameResults;
  console.log(gameResults);
  return teamStreak > 1 ? [teamStreak, gameResults] : ["0", gameResults];
};

//BIGGEST WIN & DEFEAT TODO: join
export const biggestWin = (matchReport, team, matchResult) => {
  const matchResults = matchReport.map((game) => {
    const { team: teamA, score: scoreA } = game.playerA;
    const { team: teamB, score: scoreB } = game.playerB;
    return [
      [teamA, scoreA],
      [teamB, scoreB],
    ];
  });
  const teamVictoriesMatches = matchResults.filter((result) => {
    //result[0] = team result[1] = score
    return (
      (result[0][0] === team && result[0][1] === 4) ||
      (result[1][0] === team && result[1][1] === 4)
    );
  });
  const teamScores = teamVictoriesMatches.flatMap((item, i) => [item[0][1], item[1][1]]);
  const minTeamScore = Math.min(...teamScores);

  if (teamVictoriesMatches.length === 0) return "-";

  //don't forget only first value matters here
  return matchResult === "W" ? `4 - ${minTeamScore}` : `${minTeamScore} - 4`;
};

export const biggestDefeat = (matchReport, team, matchResult) => {
  const matchResults = matchReport.map((game) => {
    const { team: teamA, score: scoreA } = game.playerA;
    const { team: teamB, score: scoreB } = game.playerB;
    return [
      [teamA, scoreA],
      [teamB, scoreB],
    ];
  });
  const matchesWhereTeamLost = matchResults.filter(
    (item) =>
      (item[0][0] === team && item[0][1] < 4) || (item[1][0] === team && item[1][1] < 4)
  );
  const teamScores = matchesWhereTeamLost.flatMap((item, i) => [item[0][1], item[1][1]]);
  const minTeamScore = Math.min(...teamScores);

  if (matchesWhereTeamLost.length === 0) return "-";
  return matchResult === "W" ? `4 - ${minTeamScore}` : `${minTeamScore} - 4`;
};

export default numOfGamesEachTeam;
