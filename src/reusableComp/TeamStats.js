import React from "react";
import "./TeamStats.scss";
import matchesReport from "../data/matchReports";
import {
  numOfGamesEachTeam,
  numOfWinsEachTeam,
  numOfDefeatsEachTeam,
  percentagesWinsAndLosses,
  teamStreaksAndLast5Results,
  biggestWin,
  biggestDefeat,
} from "../statistics/TeamStats/teamsTableFn";

function TeamStats({ name }) {
  return (
    <div className="TeamStats">
      <div className="items ">{name}</div>
      <div className="items ">{numOfGamesEachTeam(matchesReport, name)}</div>
      <div className="items ">{numOfWinsEachTeam(matchesReport, name)}</div>
      <div className="items ">{numOfDefeatsEachTeam(matchesReport, name)}</div>
      <div className="items ">{percentagesWinsAndLosses(matchesReport, "w", name)}%</div>
      <div className="items ">{percentagesWinsAndLosses(matchesReport, "l", name)}%</div>
      <div className="items ">
        {teamStreaksAndLast5Results(matchesReport, null, name)[1].reverse()}
      </div>
      <div className="items ">
        {teamStreaksAndLast5Results(matchesReport, "W", name)[0]}
      </div>
      <div className="items ">
        {teamStreaksAndLast5Results(matchesReport, "D", name)[0]}
      </div>
      <div className="items ">{biggestWin(matchesReport, name, "W")}</div>
      <div className="items ">{biggestDefeat(matchesReport, name, "D")}</div>
    </div>
  );
}

export default TeamStats;
