import React from "react";
import "./PlayersStats.scss";
import PlayerStats from "../../reusableComp/PlayerStats";

function PlayersStats() {
  return (
    <div className="PlayersStats">
      <h2>Player Statistics</h2>
      <div className="wrapper__table-legend--player-data">
        <section>
          <div className="items item--1" style={{ visibility: "hidden" }}>
            Coaches{" "}
          </div>
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
        </section>

        <section className="wrapper">
          <PlayerStats />
        </section>
      </div>
    </div>
  );
}

export default PlayersStats;
