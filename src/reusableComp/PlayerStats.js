import React from "react";
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
  teamStats,
} from "../statistics/PlayerStats/PlayersStatsFn";

function PlayerStats() {
  return (
    <div>
      <div>Hugo</div>
      <div className="player">Total</div>
      <div className="player">
        {numOfGamesPlayedByPlayer(matchReport, "Hugo")}
      </div>
      <div className="player">{numOfVictories(matchReport, "Hugo")}</div>
      <div className="player">
        {numOfGamesPlayedByPlayer(matchReport, "Hugo") -
          numOfVictories(matchReport, "Hugo")}
      </div>
      <div className="player">{calcWinningPerc(matchReport, "Hugo")}%</div>
      <div className="player">{calcDefeatsPerc(matchReport, "Hugo")}%</div>
      <div className="player">{resultLast5Games(matchReport, "Hugo")}</div>
      <div className="player">
        {calcPlayerStreaks(resultLast5Games(matchReport, "Hugo"), "W")}
      </div>
      <div className="player">
        {calcPlayerStreaks(resultLast5Games(matchReport, "Hugo"), "D")}
      </div>
      <div className="player">{biggestWin(matchReport, "W", "Hugo")}</div>
      <div className="player">BD{biggestDefeat(matchReport, "D", "Hugo")}</div>
      {/* <div className="items item--6">
          {teamStatsPerPlayer(matchReport, "Hugo")}
        </div> */}
      {/* EXTENDED  */}
      {teamStats.map((item, i) => {
        return (
          <section key={i}>
            <div>a</div>
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
  );
}

export default PlayerStats;
