export const addDataToPlayerStats = (data, setMatchesDatabase) => {
  const namePlayerA = data.games[0].playerA.name;
  const namePlayerB = data.games[0].playerB.name;
  // const { result } = data.games[0];
  // const {results } = data.players[]
  console.dir("HELP ME:", namePlayerA);

  setMatchesDatabase((state) => {
    return {
      ...state,
      [namePlayerA]: {
        results: [data.games[0].playerA.result],
        games: [data.games[0]],
        // gamesWon: gamesWon(data.players[namePlayerA].results),
        // gamesLost: gamesLost(data.players[namePlayerA].results),
        // gamesDrawn: gamesDrawn(data.players[namePlayerA].results),
      },
    };
  });
  // if (!data.players[namePlayerA]) {
  //   console.log("NO PREVIOUS PLAYER ");
  //   });
};

// return {
//   [data.players[playerA]]: {
//   results: [...result, result],
//   games: [...data.players[namePlayerA].games, match],
//   gamesWon: gamesWon(data.players[namePlayerA].results),
//   gamesLost: gamesLost(data.players[namePlayerA].results),
//   gamesDrawn: gamesDrawn(data.players[namePlayerA].results),
// },
// [playerB]: {},}

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
  const resultPlayerB = resultPlayerA === "W" ? "L" : resultPlayerA === "L" ? "W" : "D";

  // console.log(playerB, playerB.round1);

  const match = {
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
  };
  const gamesWon = (results) => results.filter((item) => item === "W").length;
  const gamesLost = (results) => results.filter((item) => item === "L").length;
  const gamesDrawn = (results) => results.filter((item) => item === "D").length;

  // ADD PLAYER
  const calcMaxScore = (database, lastMatch, namePlayer) => {
    const updatedDatabase = { ...database, games: [...database.games, lastMatch] };
    const totalScores = updatedDatabase.games.map((match) => {
      const { playerA, playerB } = match;
      if (playerA.name === namePlayer) return playerA.total;
      else if (playerB.name === namePlayer) return playerB.total;
      else throw Error("an Error has ocurred");
    });
    return Math.max(...totalScores);
  };
  const calcMinScore = (database, lastMatch, namePlayer) => {
    console.log("MIN");
    const updatedDatabase = { ...database, games: [...database.games, lastMatch] };
    const totalScores = updatedDatabase.games.map((match) => {
      const { playerA, playerB } = match;
      if (playerA.name === namePlayer) return playerA.total;
      else if (playerB.name === namePlayer) return playerB.total;
      else throw Error("an Error has ocurred");
    });
    return Math.min(...totalScores);
  };

  setMatchesDatabase((state) => {
    const { players } = state;
    // console.log("RES", players);

    return {
      ...state,
      games: [...state.games, match],
      // players: addIfNewPlayer(state, namePlayerA, playerB.name),
      players: {
        ...state.players,
        [match.playerA.name]: {
          // results: [...(state.players[namePlayerA], resultPlayerA || resultPlayerA)],
          results: [
            ...(state.players[namePlayerA] ? state.players[namePlayerA].results : []),
            resultPlayerA,
          ],
          games: [
            ...(state.players[namePlayerA] ? state.players[namePlayerA].games : []),
            match,
          ],
          maxScore: players[namePlayerA]
            ? calcMaxScore(state, match, namePlayerA)
            : totalPlayerA,
          minScore: players[namePlayerA]
            ? calcMinScore(state, match, namePlayerA)
            : totalPlayerA,
        },
        [match.playerB.name]: {
          results: [
            ...(state.players[playerB.name] ? state.players[playerB.name].results : []),
            resultPlayerB,
          ],
          games: [
            ...(state.players[playerB.name] ? state.players[playerB.name].games : []),
            match,
          ],
          maxScore: players[playerB.name]
            ? calcMaxScore(state, match, playerB.name)
            : totalPlayerB,
          minScore: players[playerB.name]
            ? calcMinScore(state, match, playerB.name)
            : totalPlayerB,
        },
      },
    };
  });

  // document.querySelector("form").reset();
};

export default handleSubmit;
