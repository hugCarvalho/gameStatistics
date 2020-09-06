import React from "react";
import "./PlayerStats.scss";
import matchReport from "../data/matchReports";
import {
  numOfGamesPlayedByPlayer,
  numOfVictories,
  calcWinningPerc,
  calcDefeatsPerc,
  resultLast5Games,
  calcPlayerStreaks,
  biggestWin,
  biggestDefeat,
  teamStatsPerPlayer,
} from "../statistics/PlayerStats/PlayersStatsFn";

function PlayerStats({ playerName }) {
  const team = teamStatsPerPlayer(matchReport, playerName);
  return (
    <div className="PlayerStats">
      <div className="player-name">{playerName}</div>
      <div className="wrapper__sections">
        <section>
          <div className="hidden">Total</div>
          <div className="player">
            {numOfGamesPlayedByPlayer(matchReport, playerName)}
          </div>
          <div className="player">{numOfVictories(matchReport, playerName)}</div>
          <div className="player">
            {numOfGamesPlayedByPlayer(matchReport, playerName) -
              numOfVictories(matchReport, playerName)}
          </div>
          <div className="player">{calcWinningPerc(matchReport, playerName)}%</div>
          <div className="player">{calcDefeatsPerc(matchReport, playerName)}%</div>
          <div className="player">
            {resultLast5Games(matchReport, playerName).length === 0
              ? "-"
              : resultLast5Games(matchReport, playerName)}
          </div>
          <div className="player">
            {calcPlayerStreaks(resultLast5Games(matchReport, playerName), "W")}
          </div>
          <div className="player">
            {calcPlayerStreaks(resultLast5Games(matchReport, playerName), "D")}
          </div>
          <div className="player">{biggestWin(matchReport, "W", playerName)}</div>
          <div className="player">{biggestDefeat(matchReport, "D", playerName)}</div>
          {/* <div className="items item--6">
          {teamStatsPerPlayer(matchReport, playerName)}
        </div> */}
          {/* EXTENDED  */}
        </section>
        {team.map((item, i) => {
          return (
            <section key={i}>
              <div>{item[0]}</div>
              <div>{item[1].played}</div>
              <div>{item[1].won}</div>
              <div>{item[1].lost}</div>
              {/* <div>{item[1].won}</div>
              <div>{item[1].lost}</div> */}
            </section>
          );
        })}
        {/* {<Bar data={data} />} */}
      </div>
    </div>
  );
}

export default PlayerStats;
