import React from "react";

function Log({ matchesDatabase }) {
  return (
    <section>
      <h4>Games Log</h4>
      <p>Games played: {matchesDatabase.games.length} </p>
      <ul>
        {matchesDatabase.games.map((item) => {
          const { playerA, playerB, date, id } = item;

          console.log("pA", playerA, item);
          return (
            <div key={id} className="wrapper__log">
              <div>{date}</div>
              <div className="wrapper__game-result">
                <span>
                  {playerA.name} : {playerA.rounds[0]} - {playerA.rounds[1]} -{" "}
                  {playerA.rounds[2]} = {playerA.total}
                </span>
                <span>
                  {playerB.name} : {playerB.rounds[0]} - {playerB.rounds[1]} -{" "}
                  {playerB.rounds[2]} = {playerB.total}
                </span>
              </div>
            </div>
          );
        })}
      </ul>
    </section>
  );
}

export default Log;
