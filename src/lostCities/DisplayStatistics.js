import React from "react";

function DisplayStatistics({ matchesDatabase }) {
  const [playerName, setPlayerName] = React.useState("");
  const [playerResults, setPlayerResults] = React.useState({});
  const [playerScores, setPlayerScores] = React.useState({});

  const { games, players } = matchesDatabase;
  const allPlayers = Object.keys(matchesDatabase.players);

  React.useEffect(() => {
    const createResultsObj = (playerName) => {
      // console.log("Create RESULTSOBJ");
      const resultsArr = players[playerName].results;
      let resultsObj = { wins: 0, losses: 0, draws: 0 };
      for (let result of resultsArr) {
        if (result === "W") resultsObj.wins += 1;
        if (result === "D") resultsObj.draws += 1;
        if (result === "L") resultsObj.losses += 1;
      }
      setPlayerResults(resultsObj);
    };

    const calcDataRelatedToScores = (playerName) => {
      let totalScores = [];

      for (let game of games) {
        if (game.playerA.name === playerName) totalScores.push(game.playerA.total);
        if (game.playerB.name === playerName) totalScores.push(game.playerB.total);
      }
      setPlayerScores({
        maxScore: Math.max(...totalScores),
        minScore: Math.min(...totalScores),
      });
    };

    console.log("CALC OBJ");
    if (playerName) {
      createResultsObj(playerName);
      calcDataRelatedToScores(playerName);
    }
  }, [playerName, setPlayerResults, games, players]);

  return (
    <div>
      <h2>Statistics</h2>
      <form onChange={(e) => setPlayerName(e.target.value)}>
        <label htmlFor="player">Choose a player:</label>
        <select name="player" id="player">
          <option name="empty"> </option>
          {allPlayers.map((name, i) => {
            return (
              <option key={i} value={name}>
                {name}
              </option>
            );
          })}
        </select>
      </form>
      Select Player:
      <div className="items item--1">
        Games:{" "}
        {matchesDatabase.players[playerName]
          ? matchesDatabase.players[playerName].games.length
          : " ---"}{" "}
      </div>
      <div className="items item--2">
        Biggest Score: {players[playerName] ? playerScores.maxScore : " ---"}
      </div>
      <div className="items item--3">
        Lowest Score: {players[playerName] ? playerScores.minScore : " ---"}
      </div>
      <div className="items item--4">
        WINS:
        {players[playerName] ? playerResults.wins : " ---"}
      </div>
      <div className="items item--5">
        Draws:
        {players[playerName] ? playerResults.draws : " ---"}
      </div>
      <div className="items item--6">
        Losses:
        {players[playerName] ? playerResults.losses : " ---"}
      </div>
    </div>
  );
}

export default DisplayStatistics;
