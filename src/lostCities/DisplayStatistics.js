import React from "react";

const obj = {
  players: {
    hugo: {
      score: 100,
    },
    pepe: {
      score: 20,
    },
  },
};

const keys = Object.keys(obj.players);

function DisplayStatistics({ matchesDatabase }) {
  const [activePlayer, setActivePlayer] = React.useState("");
  const { games, players } = matchesDatabase;

  const updateStats = (activePlayer) => {
    console.log("CALLED");
    for (let item in obj.players) {
      // console.log(item);
      if (item === activePlayer) {
        console.log(obj.players[item].score); //obj.players[item].score
      }
    }
    return "a";
  };

  React.useEffect(() => {
    console.log("AP", activePlayer);
    updateStats(activePlayer);
    console.log(updateStats());
  }, [activePlayer]);

  return (
    <div>
      <h2>Statistics</h2>
      <form onChange={(e) => setActivePlayer(e.target.value)}>
        <label htmlFor="player">Choose a player:</label>
        <select name="player" id="player">
          {keys.map((name, i) => {
            return (
              <option key={i} value={name}>
                {name}
              </option>
            );
          })}
        </select>

        <input type="submit" value="go" />
        <button type="submit"> go</button>
      </form>
      Select Player:
      <div className="items item--2">Statistics for: {players.length} </div>
      <div className="items item--2">Games: {games.length} </div>
      <div className="items item--3">Wins</div>
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
