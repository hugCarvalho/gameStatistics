import React from "react";
import "./RenderTeamsTable.scss";
import { gameInfo } from "../../data/gameInfo";

import TeamStatsCalc from "../../reusableComp/TeamStatsCalc";

// import TeamStats from "../TeamStats/"
import TeamsChartWinsAndLossesPercentage from "./TeamsChartWinsAndLossesPercentage";

//TODO: add styling

function RenderTeamsTable() {
  return (
    <section className="RenderTeamsTable">
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
            return <TeamStatsCalc name={name} key={i} />;
          })}
        </div>

        <section>
          <TeamsChartWinsAndLossesPercentage />
        </section>
      </section>
    </section>
  );
}

export default RenderTeamsTable;
