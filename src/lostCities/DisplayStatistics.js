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
  const [{ activePlayerData }, setActivePlayerData] = React.useState({});
  const { games, players } = matchesDatabase;
  const [playerName, setPlayerName] = React.useState("");

  const keys = Object.keys(matchesDatabase.players);
  const updateStats = (activePlayer) => {
    // console.log("activeplayer", activePlayer);
    let result = { score: "---" };
    for (let item in matchesDatabase.players) {
      // console.log(item);
      if (item === activePlayer) {
        result.score = matchesDatabase.players[item].score; //obj.players[item].score
      }
    }
    console.log("RES", result);
    return setActivePlayerData(result);
  };

  console.log("PLAYER NAME", playerName);

  // React.useEffect(() => {
  //   console.log("AP", activePlayer);
  //   updateStats(activePlayer);
  //   console.log(updateStats());
  // }, [activePlayer]);

  return (
    <div>
      <h2>Statistics</h2>
      <form onChange={(e) => setPlayerName(e.target.value)}>
        <label htmlFor="player">Choose a player:</label>
        <select name="player" id="player">
          <option name="empty">-----</option>
          {keys.map((name, i) => {
            return (
              <option key={i} value={name}>
                {name}
              </option>
            );
          })}
        </select>
      </form>
      Select Player:
      <div className="items item--2"></div>
      <div className="items item--2">Games: {games.length} </div>
      <div className="items item--3">
        Score:
        {activePlayerData ? activePlayerData.score : "---"}
        <div className="items item--6">
          Biggest Score:{" "}
          {matchesDatabase.players[playerName]
            ? matchesDatabase.players[playerName].maxScore
            : "---"}
        </div>
      </div>
      <div className="items item--4">Defeats</div>
      <div className="items item--5">Wins %</div>
      <div className="items item--6">Defeats %</div>
      <div className="items item--6">Last 5 games</div>
      <div className="items item--6">W streak</div>
      <div className="items item--6">L streak</div>
      <div className="items item--6">Biggest Win</div>
      <div className="items item--6">Biggest Defeat</div>
    </div>
  );
}

export default DisplayStatistics;
