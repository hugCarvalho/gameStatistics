import React from "react";
import "./RenderPlayersStats.scss";
import PlayerStatsCalc from "../../reusableComp/PlayerStatsCalc";
import PlayerWinLostChart from "./charts/PlayerWinLostChart";
import PlayerTeamsPieChart from "./charts/PlayerTeamsPieChart";

function RenderPlayersStats() {
  return (
    <div className="RenderPlayersStats">
      <h2>Player Statistics</h2>
      <div className="wrapper__table-legend--player-data">
        <section className="table-legend">
          <div className="items coach">Coach</div>
          <div className="items item--1">Team</div>
          <div className="items item--2">Games</div>
          <div className="items item--3">Wins</div>
          <div className="items item--4">Defeats</div>
          <div className="items item--5">Wins %</div>
          <div className="items item--6">Defeats %</div>
          <div className="items item--6">Last 5 games</div>
          <div className="items item--6">W streak</div>
          <div className="items item--6">L streak</div>
          <div className="items item--6">Biggest Win</div>
          <div className="items item--6">Biggest Defeat</div>
        </section>

        <section className="wrapper__player-stats">
          <PlayerStatsCalc playerName="Hugo" />
          <PlayerStatsCalc playerName="Eddie" />
        </section>
      </div>

      <section className="container__charts">
        <PlayerWinLostChart />
      </section>

      <section>
        <PlayerTeamsPieChart />
      </section>
    </div>
  );
}

export default RenderPlayersStats;
