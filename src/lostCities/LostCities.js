import React, { Children, createContext } from "react";
import handleSubmit from "./handleSubmit";
import LastFixture from "./LastFixture";
import localStorageGet, { localStorageSet } from "./localStorage";
import Log from "./Log";
import PlayerForm from "./PlayerForm";
import "./LostCities.scss";
import DisplayStatistics from "./DisplayStatistics";
import { addDataToPlayerStats } from "../lostCities/handleSubmit";

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
const database = {
  games: [],
  players: {
    // aa: {
    //   results: [],
    //   games: [],
    //   gamesWon: 0,
    // },
  },
};

export function LostCities() {
  const [matchesDatabase, setMatchesDatabase] = React.useState(database);
  const [formIsOpen, setFormIsOpen] = React.useState(false);

  //LOCAL STORAGE: GET
  React.useEffect(() => {
    localStorageGet(setMatchesDatabase);
  }, []);

  //LOCAL STORAGE: SET
  React.useEffect(() => {
    console.table("database:", matchesDatabase);
    localStorageSet(matchesDatabase);
  }, [matchesDatabase]);

  React.useEffect(() => {
    // console.table("ONE TIMER:", matchesDatabase);
    // if (matchesDatabase.games.length > 0) {
    //   console.log("RUNS IF DATABASE HAS ENTRIES");
    //   addDataToPlayerStats(matchesDatabase, setMatchesDatabase);
    // }
  }, []);

  React.useEffect(() => {
    document.querySelectorAll(".reset").forEach((el) => (el.value = 0));
  }, [formIsOpen]);

  const resetForm = () => {
    document.querySelector("form").reset();
    document.querySelectorAll(".reset").forEach((el) => (el.value = 0));
  };

  return (
    <>
      <h1>Lost Cities</h1>
      {/* RENDER LAST RESULT */}
      {matchesDatabase.games.length ? (
        <LastFixture matchesDatabase={matchesDatabase} />
      ) : (
        <h3>There are no games recorded yet. Why don't you add an entry? </h3>
      )}
      {/* TODO: //REPLACE */}
      <div style={{ display: "flex" }}>
        <button onClick={() => setFormIsOpen((state) => !state)}>
          {formIsOpen ? "Close form" : "Add entry"}
        </button>
        {formIsOpen && <button onClick={resetForm}>reset form</button>}
      </div>

      {/***********  FORM */}
      {formIsOpen && (
        <>
          <form className="Form" onSubmit={(e) => handleSubmit(e, setMatchesDatabase)}>
            <div className="player-forms">
              <PlayerForm player="playerA" matchesDatabase={matchesDatabase} />
              <PlayerForm player="playerB" matchesDatabase={matchesDatabase} />
            </div>
            <div>
              <button className="btn-submit" type="submit">
                Submit
              </button>
            </div>
          </form>
        </>
      )}
      <DisplayStatistics matchesDatabase={matchesDatabase} />
      <DatabaseContext.Provider value={{ matchesDatabase, setMatchesDatabase }}>
        <Log />
      </DatabaseContext.Provider>
    </>
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
