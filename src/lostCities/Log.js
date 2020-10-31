import React from "react";
import "./Log.scss";
import { DatabaseContext } from "./LostCities";

function setLogEntryColor(index) {
  return index % 2 ? { backgroundColor: "lightGrey" } : { backgroundColor: "darkGrey" };
}

function Log() {
  const { matchesDatabase, setMatchesDatabase } = React.useContext(DatabaseContext);
  const { games, players } = matchesDatabase;

  const deleteEntry = (id) => {
    console.log("delete", matchesDatabase);

    // const updatedPlayers = players.filter(entry => {})
    setMatchesDatabase((state) => {
      const updatedDatabaseGames = games.filter((entry) => entry.id !== id);
      return {
        ...state,
        games: updatedDatabaseGames,
        players: Object.keys(players).reduce((acc, player) => {
          players[player].games = players[player].games.filter(
            (entry) => entry.id !== id
          );
          if (players[player].games.length) {
            return { ...acc, [player]: players[player] };
          }
          return acc;
        }, {}),
      };
    });
    console.log("delete II", matchesDatabase);
  };

  return (
    <section className="Log">
      <h4>Match Log</h4>
      <p>Matches played: {games.length} </p>
      <ul>
        {games.map((item, i) => {
          const { playerA, playerB, id } = item;

          return (
            <li key={id} className="wrapper__log" style={setLogEntryColor(i)}>
              <time>
                {new Date(games[0].date).toLocaleString("de", {
                  year: "numeric",
                  day: "numeric",
                  month: "numeric",
                })}
              </time>
              <div className="wrapper__game-result">
                <span>
                  {playerA.name} : {playerA.rounds[0]} - {playerA.rounds[1]} -{" "}
                  {playerA.rounds[2]} = {playerA.total}{" "}
                </span>
                <span>
                  {playerB.name} : {playerB.rounds[0]} - {playerB.rounds[1]} -{" "}
                  {playerB.rounds[2]} = {playerB.total}
                </span>
              </div>
              <span>
                <button onClick={() => deleteEntry(id)}>X</button>
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Log;
