import React from "react";
import formatDate from "./formatDate";
import "./LastMatch.scss";

function LastMatch({ matchesDatabase }) {
  return (
    <section className="LastMatch">
      <h2>Previous Match</h2>
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
            <td>Round 3</td>
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
            <td>
              <strong>Total</strong>
            </td>
            <td>
              <strong>
                {matchesDatabase.games[0] && matchesDatabase.games[0].playerA.total}
              </strong>
            </td>
            <td>
              <strong>
                {matchesDatabase.games[0] && matchesDatabase.games[0].playerB.total}
              </strong>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default LastMatch;
