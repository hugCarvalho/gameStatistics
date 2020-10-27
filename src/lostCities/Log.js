import React from "react";
import "./Log.scss";
import { DatabaseContext } from "./Form";

function setLogEntryColor(index) {
  return index % 2 ? { backgroundColor: "lightGrey" } : { backgroundColor: "darkGrey" };
}

function Log() {
  const { matchesDatabase, setMatchesDatabase } = React.useContext(DatabaseContext);
  const { games } = matchesDatabase;

  const deleteEntry = (id) => {
    console.log("clicked", matchesDatabase);
    const newDatabase = games.filter((entry) => entry.id !== id);
    setMatchesDatabase((state) => {
      return {
        ...state,
        games: newDatabase,
      };
    });
  };

  return (
    <section className="Log">
      <h4>Games Log</h4>
      <p>Games played: {games.length} </p>
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
