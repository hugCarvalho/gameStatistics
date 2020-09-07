import React from "react";
import "./LastFixture.scss";
import matchReport from "../data/matchReports";
// import teamStats from "./stats/statsTeams";

function LastFixture() {
  const lastMatch = matchReport[matchReport.length - 1];

  return (
    <header className="App-header">
      <h1>Baseball Highlights Statistics</h1>
      <h3>
        Last fixture: <time dateTime="2020-08-30">{lastMatch.date}</time>
      </h3>
      <section>
        <div className="wrapper__all">
          <div className="info">
            <span>{lastMatch.playerA.name}</span>
            <span>{lastMatch.playerA.team}</span>
            <span>{lastMatch.playerA.score}</span>
          </div>
          <div> Vs </div>
          <div className="info">
            <span>{lastMatch.playerB.name}</span>
            <span>{lastMatch.playerB.team}</span>
            <span>{lastMatch.playerB.score}</span>
          </div>
        </div>
      </section>
    </header>
  );
}

export default LastFixture;
