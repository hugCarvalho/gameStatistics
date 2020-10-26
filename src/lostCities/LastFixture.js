import React from "react";
import formatDate from "./formatDate";
import "./LastFixture.scss";

function LastFixture({ matchesDatabase }) {
  return (
    <section className="LastFixture">
      <h2>Last Fixture</h2>
      <time>Date: {matchesDatabase.games[0].date && formatDate(matchesDatabase)}</time>
      <table className="greenTable">
        <thead>
          <tr>
            <th></th>
            <th>
              {matchesDatabase.games[0]
                ? matchesDatabase.games.reverse()[0].playerA.name // !!! Reverses in place !!!
                : ""}
            </th>
            <th>
              {matchesDatabase.games[0] ? matchesDatabase.games[0].playerB.name : ""}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Round 1</td>
            <td>
              {matchesDatabase.games[0] &&
                `${matchesDatabase.games[0].playerA.rounds[0]}`}
            </td>
            <td>
              {matchesDatabase.games[0] &&
                `${matchesDatabase.games[0].playerB.rounds[0]}`}
            </td>
          </tr>
          <tr>
            <td>Round 2</td>
            <td>
              {" "}
              {matchesDatabase.games[0] &&
                `${matchesDatabase.games[0].playerA.rounds[1]}`}
            </td>
            <td>
              {matchesDatabase.games[0] &&
                `${matchesDatabase.games[0].playerB.rounds[1]}`}
            </td>
          </tr>
          <tr>
            <td>Round_3</td>
            <td>
              {" "}
              {matchesDatabase.games[0] &&
                `${matchesDatabase.games[0].playerA.rounds[2]}`}
            </td>
            <td>
              {matchesDatabase.games[0] &&
                `${matchesDatabase.games[0].playerB.rounds[2]}`}
            </td>
          </tr>
          <tr>
            <td>Total</td>
            <td>{matchesDatabase.games[0] && matchesDatabase.games[0].playerA.total}</td>
            <td>{matchesDatabase.games[0] && matchesDatabase.games[0].playerB.total}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default LastFixture;
