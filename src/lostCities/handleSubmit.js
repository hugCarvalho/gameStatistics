const handleSubmit = (e, setMatchesDatabase, dispatchError) => {
  e.preventDefault();

  //The different approaches are only for practice purposes
  const { namePlayerA, round1, round2, round3 } = {
    namePlayerA: e.target.elements["playerA-name"].value,
    round1: e.target.elements["playerA-round1"].value,
    round2: e.target.elements["playerA-round2"].value,
    round3: e.target.elements["playerA-round3"].value,
  };

  const playerB = {
    name: e.target.elements["playerB-name"].value,
    round1: Number(e.target.elements["playerB-round1"].value),
    round2: Number(e.target.elements["playerB-round2"].value),
    round3: Number(e.target.elements["playerB-round3"].value),
  };

  if (namePlayerA === playerB.name) {
    dispatchError({ type: "sameName" });
    console.log("set error");
    return;
  }
  dispatchError({ type: "none" });

  const totalPlayerA = +round1 + +round2 + +round3;
  const totalPlayerB = playerB.round1 + playerB.round2 + playerB.round3;
  const calcResultPlayerA = () => {
    return totalPlayerA > totalPlayerB ? "W" : totalPlayerA < totalPlayerB ? "L" : "D";
  };
  const resultPlayerA = calcResultPlayerA();
  const resultPlayerB = resultPlayerA === "W" ? "L" : resultPlayerA === "L" ? "W" : "D";

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

  setMatchesDatabase((state) => {
    const { games, players } = state;
    return {
      ...state,
      games: [...games, match],
      players: {
        ...players,
        [match.playerA.name]: {
          results: [
            ...(players[namePlayerA] ? players[namePlayerA].results : []),
            resultPlayerA,
          ],
          games: [...(players[namePlayerA] ? players[namePlayerA].games : []), match],
        },
        [match.playerB.name]: {
          results: [
            ...(players[playerB.name] ? players[playerB.name].results : []),
            resultPlayerB,
          ],
          games: [...(players[playerB.name] ? players[playerB.name].games : []), match],
        },
      },
    };
  });

  // document.querySelector("form").reset();
};

export default handleSubmit;
