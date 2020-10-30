import React from "react";
import "./LastMatch.scss";
import PropTypes from "prop-types";

function LastMatch({ matchReports = [] }) {
  const lastMatch = matchReports[matchReports.length - 1];

  return (
    <header className="LastMatch">
      <h1>Baseball Highlights Statistics</h1>

      {matchReports.length === 0 ? (
        <h3>"No matches have been played yet"</h3>
      ) : (
        <>
          <h3>
            Last game: <time dateTime="2020-08-30">{lastMatch.date}</time>
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

LastMatch.propTypes = {
  matchReports: PropTypes.array,
};
LastMatch.defaultProps = {
  matchReports: [],
};

export default LastMatch;
