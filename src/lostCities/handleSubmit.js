const addIfNewPlayer = (state, namePlayerA, namePlayerB) => {
  const PlayerANameAlreadyExists = state.games.find((game) => {
    return namePlayerA === game.playerA.name || namePlayerA === game.playerB.name;
  });
  const PlayerBNameAlreadyExists = state.games.find((game) => {
    return namePlayerB === game.playerA.name || namePlayerB === game.playerB.name;
  });

  let result = [...state.players];
  if (!PlayerANameAlreadyExists) {
    result.push(namePlayerA);
  }
  if (!PlayerBNameAlreadyExists) {
    result.push(namePlayerB);
  }

  return [...result];
};

const handleSubmit = (e, setMatchesDatabase) => {
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
          id: +(Math.random() * 1000000).toFixed(0), //replace with UUID
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
      players: addIfNewPlayer(state, namePlayerA, playerB.name),
    };
  });

  // document.querySelector("form").reset();
};

export default handleSubmit;
