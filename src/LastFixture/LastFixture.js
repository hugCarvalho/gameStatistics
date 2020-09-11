import React from "react";
import "./LastFixture.scss";
import PropTypes from "prop-types";
// import teamStats from "./stats/statsTeams";

function LastFixture({ matchReports = [] }) {
  const lastMatch = matchReports[matchReports.length - 1];

  return (
    <header className="App-header">
      <h1>Baseball Highlights Statistics</h1>

      {matchReports.length === 0 ? (
        <h3>"No matches have been played yet"</h3>
      ) : (
        <>
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
              <div> vs </div>
              <div className="info">
                <span>{lastMatch.playerB.name}</span>
                <span>{lastMatch.playerB.team}</span>
                <span>{lastMatch.playerB.score}</span>
              </div>
            </div>
          </section>
        </>
      )}
    </header>
  );
}

LastFixture.propTypes = {
  matchReports: PropTypes.array,
};
LastFixture.defaultProps = {
  matchReports: [],
};

export default LastFixture;
