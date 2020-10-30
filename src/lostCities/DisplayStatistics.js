import React from "react";

const matchesDatabase = {
  players: {
    hugo: {
      score: 100,
    },
    pepe: {
      score: 20,
    },
  },
};

function DisplayStatistics({ matchesDatabase }) {
  const [playerName, setPlayerName] = React.useState("");
  const [playerResults, setPlayerResults] = React.useState({});

  const allPlayers = Object.keys(matchesDatabase.players);
  const { games, players } = matchesDatabase;

  React.useEffect(() => {
    const makeResultsObj = (playerName) => {
      console.log("MAKE RESULT");
      const resultsArr = matchesDatabase.players[playerName].results;
      let resultsObj = { wins: 0, losses: 0, draws: 0 };
      for (let result of resultsArr) {
        if (result === "W") resultsObj.wins += 1;
        if (result === "D") resultsObj.draws += 1;
        if (result === "L") resultsObj.losses += 1;
      }
      console.log(resultsObj);
      setPlayerResults(resultsObj);
    };
    console.log("CALC OBJ");
    if (playerName) {
      makeResultsObj(playerName);
    }
  }, [playerName, setPlayerResults, matchesDatabase]);

  return (
    <div>
      <h2>Statistics</h2>
      <form onChange={(e) => setPlayerName(e.target.value)}>
        <label htmlFor="player">Choose a player:</label>
        <select name="player" id="player">
          <option name="empty"> -----</option>
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
        Biggest Score:{" "}
        {matchesDatabase.players[playerName]
          ? matchesDatabase.players[playerName].maxScore
          : " ---"}
      </div>
      <div className="items item--3">
        Lowest Score:{" "}
        {matchesDatabase.players[playerName]
          ? matchesDatabase.players[playerName].minScore
          : " ---"}
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
