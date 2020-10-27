import React from "react";
import "./Log.scss";
import { DatabaseContext } from "./Form";

function Log() {
  const { matchesDatabase, setMatchesDatabase } = React.useContext(DatabaseContext);
  const deleteEntry = (id) => {
    console.log("clicked", matchesDatabase);
    const { games } = matchesDatabase;

    console.log(id);
    const res = games.filter((entry) => entry.id !== id);
    //const res = games.find((entry) => entry.id === id);
    setMatchesDatabase((state) => {
      return {
        ...state,
        games: res,
      };
    });
    console.log(res);
  };

  return (
    <section className="Log">
      <h4>Games Log</h4>
      <p>Games played: {matchesDatabase.games.length} </p>
      <ul>
        {matchesDatabase.games.map((item) => {
          const { playerA, playerB, id } = item;

          {
            /* console.log("pA", playerA, item); */
          }
          return (
            <div key={id} className="wrapper__log">
              <div>
                {new Date(matchesDatabase.games[0].date).toLocaleString("de", {
                  year: "numeric",
                  day: "numeric",
                  month: "numeric",
                })}
              </div>
              <div className="wrapper__game-result">
                <span>
                  {playerA.name} : {playerA.rounds[0]} - {playerA.rounds[1]} -{" "}
                  {playerA.rounds[2]} = {playerA.total}{" "}
                </span>
                <span>
                  {playerB.name} : {playerB.rounds[0]} - {playerB.rounds[1]} -{" "}
                  {playerB.rounds[2]} = {playerB.total}
                </span>
                <span>
                  <button>edit</button>
                </span>

                <button onClick={() => deleteEntry(id)}>X</button>
              </div>
            </div>
          );
        })}
      </ul>
    </section>
  );
}

export default Log;
