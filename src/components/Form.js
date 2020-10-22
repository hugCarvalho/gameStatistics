import React from "react";
import "./Form.scss";

const database = [];

//Component
//1 - Form
//2 - Player Input

export function Form() {
  const [matchesDatabase, setMatchesDatabase] = React.useState(database);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { calc, namePlayerOne, round1, round2, round3 } = {
      namePlayerOne: e.target.elements["player01-name"].value,
      round1: e.target.elements["player01-round1"].value,
      round2: e.target.elements["player01-round2"].value,
      round3: e.target.elements["player01-round3"].value,
      calc() {
        return +round1 + +round2 + +round3;
      },
    };
    const playerTwo = {
      name: e.target.elements["player02-name"].value,
      round1: Number(e.target.elements["player02-round1"].value),
      round2: Number(e.target.elements["player02-round2"].value),
      round3: Number(e.target.elements["player02-round3"].value),
    };

    setMatchesDatabase({
      id: Math.random(),
      date: Date.now(),
      playerOne: {
        name: namePlayerOne,
        rounds: [+round1, +round2, +round3],
        total: calc(),
      },
      playerTwo: {
        name: playerTwo.name,
        rounds: [playerTwo.round1, playerTwo.round2, playerTwo.round3],
        total: playerTwo.round1 + playerTwo.round2 + playerTwo.round3,
      },
    });
  };

  React.useEffect(() => {
    console.dir("database", matchesDatabase);
  }, [matchesDatabase]);

  return (
    <>
      {}
      <form className="Form" onSubmit={handleSubmit}>
        {/* Do component of player form */}
        <div className="player-input">
          <h2>Player 1</h2>
          <label htmlFor="player01-name">Player name</label>
          <input
            id="player01-name"
            name="player01-name"
            type="text"

            // onChange={(e) => setInputText(e.target.value)}
          />
          {/* ROUNDS */}
          <div className="wrapper__rounds">
            <label htmlFor="player01-round1">Round 1</label>
            <input id="player01-round1" name="player01-round1" type="number" />
            <label htmlFor="player01-round1">Round 2</label>
            <input id="player01-round2" name="player01-round2" type="number" />
            <label htmlFor="player01-round1">Round 3</label>
            <input id="player01-round3" name="player01-round3" type="number" />
          </div>
        </div>

        <label htmlFor="player01-total">Total</label>
        <input
          id="player01-total"
          name="player01-total"
          readOnly
          // onChange={(e) => setInputText(e.target.value)}
        />

        <div>
          <button type="submit">Submit</button>
        </div>

        <div className="player-input">
          <h2>Player 2</h2>
          <label htmlFor="player02-name">Player name</label>
          <input
            id="player02-name"
            name="player02-name"
            type="text"

            // onChange={(e) => setInputText(e.target.value)}
          />
          {/* ROUNDS */}
          <div className="wrapper__rounds">
            <label htmlFor="player02-round1">Round 1</label>
            <input id="player02-round1" name="player02-round1" type="number" />
            <label htmlFor="player02-round2">Round 2</label>
            <input id="player02-round2" name="player02-round2" type="number" />
            <label htmlFor="player02-round3">Round 3</label>
            <input id="player02-round3" name="player02-round3" type="number" />
          </div>
        </div>

        <label htmlFor="player02-total">Total</label>
        <input
          id="player02-total"
          name="player02-total"
          readOnly
          // onChange={(e) => setInputText(e.target.value)}
        />
        {/* PLAAYER 2 */}
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
