import React from "react";

function PlayerStatisticsData({
  matchesDatabase,
  playerName,
  players,
  playerScores,
  playerResults,
}) {
  return (
    <>
      <div className="items item--1">
        Games:{" "}
        {matchesDatabase.players[playerName]
          ? matchesDatabase.players[playerName].games.length
          : " ---"}{" "}
      </div>
      <div className="items item--2">
        Biggest Score: {players[playerName] ? playerScores.maxScore : " ---"}
      </div>
      <div className="items item--3">
        Lowest Score: {players[playerName] ? playerScores.minScore : " ---"}
      </div>
      <div className="items item--4">
        WINS:
        {players[playerName] ? playerResults.wins : " ---"}
      </div>
      <div className="items item--5">
        Draws:
        {players[playerName] ? playerResults.draws : " ---"}
      </div>
      <div className="items item--6">
        Losses:
        {players[playerName] ? playerResults.losses : " ---"}
      </div>
    </>
  );
}

export default PlayerStatisticsData;
