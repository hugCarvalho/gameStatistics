import React from "react";
import "./TeamsTable.scss";
import { gameInfo } from "../GameInfo/GameInfo";

import TeamStats from "../../reusableComp/TeamStats";
import TeamsChartWinsAndLossesPercentage from "./TeamsCharts";

//TODOS PRIORiTIES
//TODO: move fn to dedicated file && refactor them
//TODO: make reusable component for each team
//TODO: make graph
//TODO: add styling

function TeamTable() {
  return (
    <div>
      <h2>Teams Statistics</h2>
      <section className="TeamTable">
        <div className="wrapper__team-stats">
          <div className="items item--1">Team</div>
          <div className="items item--2">Games</div>
          <div className="items item--3">Wins</div>
          <div className="items item--4">Defeat</div>
          <div className="items item--5">Wins %</div>
          <div className="items item--6">Defeats %</div>
          <div className="items item--6">Last 5 games</div>
          <div className="items item--6">W streak</div>
          <div className="items item--6">L streak</div>
          <div className="items item--6">Biggest win</div>
          <div className="items item--6">Biggest Defeat</div>
        </div>

        {gameInfo.teams.map((name, i) => {
          return <TeamStats name={name} key={i} />;
        })}
        <TeamsChartWinsAndLossesPercentage />
      </section>
    </div>
  );
}

export default TeamTable;
