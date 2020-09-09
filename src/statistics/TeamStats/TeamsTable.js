import React from "react";
import "./TeamsTable.scss";
import { gameInfo } from "../GameInfo/GameInfo";

import TeamStats from "../../reusableComp/TeamStats";
import TeamsChartWinsAndLossesPercentage from "./TeamsCharts";

//TODO: add styling

function TeamTable() {
  return (
    <section className="TeamStatistics">
      <h2>Team Statistics</h2>
      <section className="wrapper-one">
        <div className="team-table">
          <section className="wrapper__team-stats">
            <div className="items ">Team</div>
            <div className="items ">Games</div>
            <div className="items ">Wins</div>
            <div className="items ">Defeat</div>
            <div className="items ">Wins %</div>
            <div className="items ">Defeats %</div>
            <div className="items ">Last 5 games</div>
            <div className="items ">W streak</div>
            <div className="items ">L streak</div>
            <div className="items ">Biggest win</div>
            <div className="items ">Biggest Defeat</div>
          </section>

          {gameInfo.teams.map((name, i) => {
            return <TeamStats name={name} key={i} />;
          })}
        </div>

        <section>
          <TeamsChartWinsAndLossesPercentage />
        </section>
      </section>
    </section>
  );
}

export default TeamTable;
