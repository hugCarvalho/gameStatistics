import React from "react";
import LastFixture from "../lostCities/LastFixture";
import PlayerForm from "../lostCities/PlayerForm";
import "./Form.scss";

const database = {
  games: [],
  players: [],
};

//ComrAnt
//1 - Form
//2 - Player Input

export function RenderEverything() {
  return <></>;
}

export function RenderLastResult() {
  return (
    <div>
      <h2>Last Fixture</h2>
      <date>Date</date>
      <p>Add result:</p>
      <button>+</button>
    </div>
  );
}

export function Form() {
  const [matchesDatabase, setMatchesDatabase] = React.useState(database);
  const [total, setTotal] = React.useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("HANDL SUBMIT");
    // setArr((state) => {
    //   return { ...state, games: [...state.games, 21] };
    // });

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
    console.log(playerB);
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

  React.useEffect(() => {
    console.log("database:", matchesDatabase);
  }, [matchesDatabase]);

  React.useEffect(() => {
    // console.log("TOTAL", total);
  }, [total]);

  // const fecha = new Date(1603661548350);
  const fecha = matchesDatabase.games[0] ? new Date(matchesDatabase.games[0].date) : null;
  // console.log(fecha);
  return (
    <>
      <section>Games History</section>
      <p>{matchesDatabase.games.length} games were played</p>
      <div>
        date + similar to last fixture (design similar to my todo list) + delete + edit{" "}
      </div>
      {/* RENDER LAST RESULT */}
      <LastFixture date={fecha} matchesDatabase={matchesDatabase} />
      <p>Add result:</p>
      <button>+</button>
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
