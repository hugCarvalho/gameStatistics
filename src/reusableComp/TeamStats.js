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
      <div className="items item--1">{name}</div>
      <div className="items item--2">{numOfGamesEachTeam(matchesReport, name)}</div>
      <div className="items item--3">{numOfWinsEachTeam(matchesReport, name)}</div>
      <div className="items item--4">{numOfDefeatsEachTeam(matchesReport, name)}</div>
      <div className="items item--6">
        {percentagesWinsAndLosses(matchesReport, "w", name)}%
      </div>
      <div className="items item--6">
        {percentagesWinsAndLosses(matchesReport, "l", name)}%
      </div>
      <div className="items item--6">
        {teamStreaksAndLast5Results(matchesReport, null, name)[1].reverse()}
      </div>
      <div className="items item--6">
        {teamStreaksAndLast5Results(matchesReport, "W", name)[0]}
      </div>
      <div className="items item--6">
        {teamStreaksAndLast5Results(matchesReport, "D", name)[0]}
      </div>
      <div className="items item--6">{biggestWin(matchesReport, name, "W")}</div>
      <div className="items item--6">{biggestDefeat(matchesReport, name, "D")}</div>
    </div>
  );
}

export default TeamStats;
