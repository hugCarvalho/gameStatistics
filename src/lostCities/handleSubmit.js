const playerDetails = (playerName, match) => {};

let name = "whatever";

const player = {
  [name]: {
    results: ["W", "D"],
    games: [
      {
        //fixtures obj
      },
    ],
    maxScore: 0,
    minScore: 0,
    winningStreak: 0,
    losingStreak: 0,
  },
};

const addIfNewPlayer = (state, namePlayerA, namePlayerB) => {
  // const PlayerANameAlreadyExists = state.games.find((game) => {
  //   return namePlayerA === game.playerA.name || namePlayerA === game.playerB.name;
  // });
  // const PlayerBNameAlreadyExists = state.games.find((game) => {
  //   return namePlayerB === game.playerA.name || namePlayerB === game.playerB.name;
  // });
  // let result = [...state.players];
  // if (!PlayerANameAlreadyExists) {
  //   result.push(namePlayerA);
  // }
  // if (!PlayerBNameAlreadyExists) {
  //   result.push(namePlayerB);
  // }
  // return [...result];
};

const lastFixture = {
  id: +(Math.random() * 1000000).toFixed(0), //replace with UUID
  date: Date.now(),
  playerA: {
    name: "Player One",
    rounds: [10, 20, 31],
    total: 61,
  },
  playerB: {
    name: "Player Two",
    rounds: [10, 20, 5],
    total: 35,
  },
};

const addPlayer = (state, playerA, playerB) => {
  // console.log("PLAYERS STATE,", state);
  let P1 = {},
    playerBObj = {};

  const outcome = "D";
  // const maxScore = console.log("STATE", state, playerA);
  // console.log("PLAYERS: ", state.players);

  let result = [];

  let lastGame = [];

  if (!state.players[playerA]) {
    // console.log("HELP", state);
    P1 = {
      [playerA]: {
        // results: [...state.games.playerA.],
        games: [state.games[0]],
        maxScore: 0,
        minScore: 0,
        winningStreak: 0,
        losingStreak: 0,
      },
    };
  }
  if (state.players[playerA]) {
    // console.log("P1", state);
    P1 = {
      [playerA]: {
        results: [...state.games.playerA],
        games: [...state.games],
        maxScore: 0,
        minScore: 0,
        winningStreak: 0,
        losingStreak: 0,
      },
    };
  }

  // if (state.players[playerA]) result = [...state.players[playerA].results, outcome];
  // if (state.players[playerB]) result = [...state.players[playerB].results, outcome];
  // if (!state.players[playerA]) result = [outcome];
  // if (!state.players[playerB]) result = [outcome];

  // if (state.players[playerA]) lastGame = [...state.players[playerA].games, lastFixture];
  // if (state.players[playerB]) lastGame = [...state.players[playerB].games, lastFixture];
  // if (!state.players[playerA]) lastGame = [outcome];
  // if (!state.players[playerB]) lastGame = [outcome];

  // const P1 = {
  //   [playerA]: {
  //     results: result,
  //     games: lastGame,
  //     maxScore: 0,
  //     minScore: 0,
  //     winningStreak: 0,
  //     losingStreak: 0,
  //   },
  // };

  const P2 = {
    [playerB]: {
      results: ["W", "D"],
      games: [
        {
          //fixtures obj
        },
      ],
      maxScore: 0,
      minScore: 0,
      winningStreak: 0,
      losingStreak: 0,
    },
  };

  return {
    ...state.players,
    ...P1,
    ...P2,
  };
};

function calculateMatchResult(state) {
  // console.log("HELP ", state);
}

const handleSubmit = (e, setMatchesDatabase) => {
  e.preventDefault();
  const { namePlayerA, round1, round2, round3 } = {
    namePlayerA: e.target.elements["playerA-name"].value,
    round1: e.target.elements["playerA-round1"].value,
    round2: e.target.elements["playerA-round2"].value,
    round3: e.target.elements["playerA-round3"].value,
  };
  // console.log(namePlayerA, round1);

  const playerB = {
    name: e.target.elements["playerB-name"].value,
    round1: Number(e.target.elements["playerB-round1"].value),
    round2: Number(e.target.elements["playerB-round2"].value),
    round3: Number(e.target.elements["playerB-round3"].value),
  };

  const totalPlayerA = +round1 + +round2 + +round3;
  const totalPlayerB = playerB.round1 + playerB.round2 + playerB.round3;
  const calcResultPlayerA = () => {
    return totalPlayerA > totalPlayerB ? "W" : totalPlayerA < totalPlayerB ? "L" : "D";
  };
  const resultPlayerA = calcResultPlayerA();
  const resultPlayerB = resultPlayerA === "W" ? "L" : resultPlayerA === "D" ? "W" : "D";

  // console.log(playerB, playerB.round1);

  setMatchesDatabase((state) => {
    return {
      ...state,
      games: [
        ...state.games,
        {
          id: +(Math.random() * 1000000).toFixed(0), //replace with UUID
          date: Date.now(),
          playerA: {
            name: namePlayerA,
            rounds: [+round1, +round2, +round3],
            total: totalPlayerA,
            result: resultPlayerA,
          },
          playerB: {
            name: playerB.name,
            rounds: [playerB.round1, playerB.round2, playerB.round3],
            total: totalPlayerB,
            result: resultPlayerB,
          },
        },
      ],
      // players: addIfNewPlayer(state, namePlayerA, playerB.name),
      players: addPlayer(state, namePlayerA, playerB.name),
    };
  });

  // document.querySelector("form").reset();
};

export default handleSubmit;
