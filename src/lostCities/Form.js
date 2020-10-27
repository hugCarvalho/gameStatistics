import React, { createContext } from "react";
import handleSubmit from "./handleSubmit";
import LastFixture from "./LastFixture";
import localStorageGet, { localStorageSet } from "./localStorage";
import Log from "./Log";
import PlayerForm from "./PlayerForm";
import "./Form.scss";

export const DatabaseContext = createContext();

const database = {
  games: [],
  players: [],
};

export function RenderLostCitiesPage() {
  const [matchesDatabase, setMatchesDatabase] = React.useState(database);
  const [showAddEntriesForm, setShowAddEntriesForm] = React.useState(false);

  //LOCAL STORAGE: GET
  React.useEffect(() => {
    localStorageGet(setMatchesDatabase);
  }, []);

  //LOCAL STORAGE: SET
  React.useEffect(() => {
    console.log("database:", matchesDatabase);
    localStorageSet(matchesDatabase);
  }, [matchesDatabase]);

  const resetForm = () => {
    document.querySelector("form").reset();
    const resetTotal = document.querySelectorAll(".reset");
    resetTotal.forEach((el) => (el.value = 0));
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
        <button onClick={() => setShowAddEntriesForm((state) => !state)}>
          {showAddEntriesForm ? "Close form" : "Add entry"}
        </button>
        {showAddEntriesForm && <button onClick={resetForm}>reset form</button>}
      </div>

      {/***********  FORM */}
      {showAddEntriesForm && (
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
