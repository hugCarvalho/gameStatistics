import React, { createContext } from "react";
import "./LostCities.scss";
import LastMatch from "./LastMatch";
import Log from "./Log";
import PlayerForm from "./PlayerForm";
import DisplayStatistics from "./DisplayStatistics";
import handleSubmit from "./handleSubmit";
import getFromLocalStorage, { saveInLocalStorage } from "./fns/localStorage";

export const DatabaseContext = createContext();
//Mocking purpose
// const database = {
//   games: [
//     {
//       id: +(Math.random() * 1000000).toFixed(0), //replace with UUID
//       date: Date.now(),
//       playerA: {
//         name: "Player One",
//         rounds: [10, 20, 30],
//         total: 60,
//       },
//       playerB: {
//         name: "Player Two",
//         rounds: [10, 20, 5],
//         total: 35,
//       },
//     },
//   ],
//   players: {
//     joe: {
//       results: ["W"],
//       games: [],
//       maxScore: 10,
//       minScore: 1,
//       winningStreak: 0,
//       losingStreak: 0,
//     },
//   },
// };
const initDatabase = {
  games: [],
  players: {},
};

export function LostCities() {
  const [matchesDatabase, setMatchesDatabase] = React.useState(
    () => getFromLocalStorage() || initDatabase
  );
  const [formIsOpen, setFormIsOpen] = React.useState(true);

  //LOCAL STORAGE: SET
  React.useEffect(() => {
    console.log("database:", matchesDatabase);
    saveInLocalStorage(matchesDatabase);
  }, [matchesDatabase]);

  React.useEffect(() => {
    document.querySelectorAll(".reset").forEach((el) => (el.value = 0));
  }, [formIsOpen]);

  const resetForm = () => {
    document.querySelector("form").reset();
    document.querySelectorAll(".reset").forEach((el) => (el.value = 0));
  };

  return (
    <div className="LostCities">
      <h1>Lost Cities</h1>
      {/* RENDER LAST RESULT */}
      {matchesDatabase.games.length ? (
        <LastMatch matchesDatabase={matchesDatabase} />
      ) : (
        <h3>There are no games recorded yet. Why don't you add an entry? </h3>
      )}
      {/* TODO: //REPLACE */}
      <div>
        <button onClick={() => setFormIsOpen((state) => !state)}>
          {formIsOpen ? "Close form" : "Add entry"}
        </button>
        {formIsOpen && <button onClick={resetForm}>reset form</button>}
      </div>

      {/***********  FORM */}
      {formIsOpen && (
        <>
          <form className="form" onSubmit={(e) => handleSubmit(e, setMatchesDatabase)}>
            <div className="player-forms">
              <PlayerForm player="playerA" matchesDatabase={matchesDatabase} />
              <PlayerForm player="playerB" matchesDatabase={matchesDatabase} />
            </div>

            <button className="btn-submit" type="submit">
              Submit
            </button>
          </form>
        </>
      )}
      <DisplayStatistics matchesDatabase={matchesDatabase} />
      <DatabaseContext.Provider value={{ matchesDatabase, setMatchesDatabase }}>
        <Log />
      </DatabaseContext.Provider>
    </div>
  );
}

// function Login({ onSubmit }) {
//   function handleSubmit(event) {
//     event.preventDefault();
//     const { playerA, playerB } = event.target.elements;
//     console.log(playerA);
//     onSubmit({
//       playerA: playerA.value,
//       playerB: playerB.value,
//     });
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//     </form>
//   );
// }

// export default Login;
