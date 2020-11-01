import React from "react";
import PlayerStatisticsData from "./PlayerStatisticsData";
import PlayerStatisticsSelectForm from "./PlayerStatisticsSelectForm";

function DisplayStatistics({ matchesDatabase }) {
  const [playerName, setPlayerName] = React.useState("");
  const [playerResults, setPlayerResults] = React.useState({});
  const [playerScores, setPlayerScores] = React.useState({});
  const [allPlayersArr, setAllPlayersList] = React.useState([]);

  const { games, players } = matchesDatabase;

  React.useEffect(() => {
    setAllPlayersList(Object.keys(matchesDatabase.players));
  }, [matchesDatabase]);

  React.useEffect(() => {
    const createResultsObj = (playerName) => {
      const resultsArr = games.map((game) => {
        const { playerA, playerB } = game;
        if (playerA.name === playerName) return playerA.result;
        else if (playerB.name === playerName) return playerB.result;
        else return null;
      });

      let resultsObj = { wins: 0, losses: 0, draws: 0 };
      resultsArr.forEach((result) => {
        if (result === "W") resultsObj.wins += 1;
        if (result === "D") resultsObj.draws += 1;
        if (result === "L") resultsObj.losses += 1;
      });
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

    // console.log("CALC OBJ");
    if (playerName && players[playerName]) {
      // console.log("Calculating for", playerName);
      createResultsObj(playerName);
      calcDataRelatedToScores(playerName);
    }
  }, [playerName, setPlayerResults, games, players]);

  const handleOnChange = (e) => {
    setPlayerName(e.target.value);
  };

  return (
    <div>
      <h2>Statistics</h2>

      <PlayerStatisticsSelectForm
        setPlayerName={setPlayerName}
        allPlayers={allPlayersArr}
        handleOnChange={handleOnChange}
      />

      <PlayerStatisticsData
        matchesDatabase={matchesDatabase}
        playerName={playerName}
        players={players}
        playerScores={playerScores}
        playerResults={playerResults}
      />
    </div>
  );
}

export default DisplayStatistics;
