import React from "react";
import LastFixture from "../lostCities/LastFixture";
import localStorageGet, { localStorageSet } from "../lostCities/LocalStorage";
import Log from "../lostCities/Log";
import PlayerForm from "../lostCities/PlayerForm";
import "./Form.scss";

const database = {
  games: [],
  players: [],
};

export function Form() {
  const [matchesDatabase, setMatchesDatabase] = React.useState(database);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { calc, namePlayerA, round1, round2, round3 } = {
      namePlayerA: e.target.elements["playerA-name"].value,
      round1: e.target.elements["playerA-round1"].value,
      round2: e.target.elements["playerA-round2"].value,
      round3: e.target.elements["playerA-round3"].value,
      calc() {
        return +round1 + +round2 + +round3;
      },
    };

    const playerB = {
      name: e.target.elements["playerB-name"].value,
      round1: Number(e.target.elements["playerB-round1"].value),
      round2: Number(e.target.elements["playerB-round2"].value),
      round3: Number(e.target.elements["playerB-round3"].value),
    };

    setMatchesDatabase((state) => {
      return {
        ...state,
        games: [
          ...state.games,
          {
            id: 1,
            date: Date.now(),
            playerA: {
              name: namePlayerA,
              rounds: [+round1, +round2, +round3],
              total: calc(),
            },
            playerB: {
              name: playerB.name,
              rounds: [playerB.round1, playerB.round2, playerB.round3],
              total: playerB.round1 + playerB.round2 + playerB.round3,
            },
          },
        ],
      };
    });

    // document.querySelector("form").reset();
  };

  //LOCAL STORAGE: GET
  React.useEffect(() => {
    localStorageGet(setMatchesDatabase);
  }, []);

  //LOCAL STORAGE: SET
  React.useEffect(() => {
    console.log("database:", matchesDatabase);
    localStorageSet(matchesDatabase);
  }, [matchesDatabase]);

  const date = matchesDatabase.games[0] ? new Date(matchesDatabase.games[0].date) : null;
  return (
    <>
      {/* RENDER LAST RESULT */}
      {matchesDatabase.games.length ? (
        <LastFixture date={date} matchesDatabase={matchesDatabase} />
      ) : (
        <h3>There are no games recorded yet. Why don't you add an entry? </h3>
      )}

      <button>Add entry</button>
      {}
      {/***********  FORM */}
      <form className="Form" onSubmit={handleSubmit}>
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
      <Log matchesDatabase={matchesDatabase} />
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
