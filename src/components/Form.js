import React from "react";
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
      <section>
        <h2>Last Fixture</h2>
        {/* <time>
           Date:{" "}
          {matchesDatabase.games[0]
            ? matchesDatabase.games[0].datetoLocaleString("de", {
                year: "numeric",
                day: "numeric",
                month: "numeric",
              })
            : null}
        </time>  */}
        {/* <time>Date: {fecha ? fecha.toDateString() : ""}</time> */}
        <time>
          Date:{" "}
          {fecha
            ? fecha.toLocaleString("de", {
                year: "numeric",
                day: "numeric",
                month: "numeric",
              })
            : null}
        </time>

        <div>
          <h3>
            Name:{" "}
            {matchesDatabase.games[0]
              ? matchesDatabase.games.reverse()[0].playerA.name // !!! Reverses in place !!!
              : ""}
            <span>
              Rounds:
              {matchesDatabase.games[0]
                ? `${matchesDatabase.games[0].playerA.rounds[0]} - ${matchesDatabase.games[0].playerA.rounds[1]} - ${matchesDatabase.games[0].playerA.rounds[2]}`
                : ""}{" "}
            </span>
            <span>
              Total Score:{" "}
              {matchesDatabase.games[0] ? matchesDatabase.games[0].playerA.total : ""}
            </span>
            <span>edit</span>
          </h3>
        </div>
        <div>
          <h3>
            Name: {matchesDatabase.games[0] ? matchesDatabase.games[0].playerB.name : ""}
            <span>
              Rounds:
              {matchesDatabase.games[0]
                ? `${matchesDatabase.games[0].playerB.rounds[0]} - ${matchesDatabase.games[0].playerB.rounds[1]} - ${matchesDatabase.games[0].playerB.rounds[2]}`
                : ""}{" "}
            </span>
            <span>
              Total Score:{" "}
              {matchesDatabase.games[0] ? matchesDatabase.games[0].playerB.total : ""}
            </span>
            <span>edit</span>
          </h3>
        </div>

        {/* <time>Date: {fecha}</time> */}
        <p>Add result:</p>
        <button>+</button>
      </section>
      {}
      <form className="Form" onSubmit={handleSubmit}>
        <PlayerForm player="playerA" matchesDatabase={matchesDatabase} />
        <PlayerForm player="playerB" matchesDatabase={matchesDatabase} />
        <div>
          <button type="submit">Submit</button>
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
//       <div>
//         <label htmlFor="playerA-name">Name</label>
//         <input id="playerA-name" name="playerA-name" type="text" />
//       </div>
//       <div>
//         <label htmlFor="playerA-round1">Round 1</label>
//         <input id="playerA-round1" name="playerA-round1" type="text" />
//       </div>
//       <div>
//         <label htmlFor="playerA-round2">Round 2</label>
//         <input id="playerA-round2" name="playerA-round2" type="text" />
//       </div>
//       <div>
//         <label htmlFor="playerA-round3">Round 3</label>
//         <input id="playerA-round3" name="playerA-round3" type="text" />
//       </div>
//       <div>
//         <button type="submit">Submit</button>
//       </div>
//     </form>
//   );
// }

// export default Login;
