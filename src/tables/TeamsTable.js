import React from "react";
import "./TeamsTable.scss";
import matchReport from "../stats/matchReports";
import teamStats from "../stats/statsTeams";
import numOfGamesEachTeam, {
  biggestWin,
  biggestDefeat,
} from "./TeamsTableFunctions";
import {
  numOfWinsEachTeam,
  numOfDefeatsEachTeam,
  percentagesWinsAndLosses,
  teamStreaksAndLast5Results,
  teamResults,
} from "./TeamsTableFunctions";

// import playersStats from "../stats/statsPlayers";
// import StatsTeam from "../stats/statsTeams";

//TODOS PRIORiTIES
//TODO: move fn to dedicated file && refactor them
//TODO: make reusable component for each team
//TODO: make graph
//TODO: add styling

// %

// console.log(teamStreaksAndLast5Results(matchReport, "W", "Los Angeles"));

function TeamTable() {
  return (
    <div>
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

        {/* Boston */}
        <div className="wrapper__team-stats Boston">
          <div className="items item--1">Boston</div>
          <div className="items item--2">
            {numOfGamesEachTeam(matchReport).Boston}
          </div>
          <div className="items item--3">
            {numOfWinsEachTeam(matchReport).Boston}
          </div>
          <div className="items item--4">
            {numOfDefeatsEachTeam(matchReport).Boston}
          </div>
          <div className="items item--6">
            {percentagesWinsAndLosses(matchReport, "w").Boston}%
          </div>
          <div className="items item--6">
            {percentagesWinsAndLosses(matchReport, "l").Boston}%
          </div>
          <div className="items item--6">
            {teamStreaksAndLast5Results(matchReport, null, "Boston")[1]}
          </div>
          <div className="items item--6">
            {teamStreaksAndLast5Results(matchReport, "W", "Boston")[0]}
          </div>
          <div className="items item--6">
            {teamStreaksAndLast5Results(matchReport, "D", "Boston")[0]}
          </div>
          <div className="items item--6">
            {biggestWin(matchReport, "Boston", "W")}
          </div>
          <div className="items item--6">
            {biggestDefeat(matchReport, "Boston", "D")}
          </div>
        </div>

        {/* San Francisco */}
        <div className="wrapper__team-stats San Francisco">
          <div className="items item--1">San Francisco</div>
          <div className="items item--2">
            {numOfGamesEachTeam(matchReport)["San Francisco"]}
          </div>
          <div className="items item--3">
            {numOfWinsEachTeam(matchReport)["San Francisco"]}
          </div>
          <div className="items item--4">
            {numOfDefeatsEachTeam(matchReport)["San Francisco"]}
          </div>
          <div className="items item--6">
            {percentagesWinsAndLosses(matchReport, "w")["San Francisco"]}%
          </div>
          <div className="items item--6">
            {percentagesWinsAndLosses(matchReport, "l")["San Francisco"]}%
          </div>
          <div className="items item--6">
            {teamStreaksAndLast5Results(matchReport, null, "San Francisco")[1]}
          </div>
          <div className="items item--6">
            {teamStreaksAndLast5Results(matchReport, "W", "San Francisco")[0]}
          </div>
          <div className="items item--6">
            {teamStreaksAndLast5Results(matchReport, "D", "San Francisco")[0]}
          </div>
          <div className="items item--6">
            {biggestWin(matchReport, "San Francisco", "W")}
          </div>
          <div className="items item--6">
            {biggestDefeat(matchReport, "San Francisco", "D")}
          </div>
        </div>

        {/* New York */}
        <div className="wrapper__team-stats New York">
          <div className="items item--1">New York</div>
          <div className="items item--2">
            {numOfGamesEachTeam(matchReport)["New York"]}
          </div>
          <div className="items item--3">
            {numOfWinsEachTeam(matchReport)["New York"]}
          </div>
          <div className="items item--4">
            {numOfDefeatsEachTeam(matchReport)["New York"]}
          </div>
          <div className="items item--6">
            {percentagesWinsAndLosses(matchReport, "w")["New York"]}%
          </div>
          <div className="items item--6">
            {percentagesWinsAndLosses(matchReport, "l")["New York"]}%
          </div>
          <div className="items item--6">
            {teamStreaksAndLast5Results(matchReport, null, "New York")[1]}
          </div>
          <div className="items item--6">
            {teamStreaksAndLast5Results(matchReport, "W", "New York")[0]}
          </div>
          <div className="items item--6">
            {teamStreaksAndLast5Results(matchReport, "D", "New York")[0]}
          </div>
          <div className="items item--6">
            {biggestWin(matchReport, "New York", "W")}
          </div>
          <div className="items item--6">
            {biggestDefeat(matchReport, "New York", "D")}
          </div>
        </div>

        {/* Los Angeles */}
        <div className="wrapper__team-stats Los Angeles">
          <div className="items item--1">Los Angeles</div>
          <div className="items item--2">
            {numOfGamesEachTeam(matchReport)["Los Angeles"]}
          </div>
          <div className="items item--3">
            {numOfWinsEachTeam(matchReport)["Los Angeles"]}
          </div>
          <div className="items item--4">
            {numOfDefeatsEachTeam(matchReport)["Los Angeles"]}
          </div>
          <div className="items item--6">
            {percentagesWinsAndLosses(matchReport, "w")["Los Angeles"]}%
          </div>
          <div className="items item--6">
            {percentagesWinsAndLosses(matchReport, "l")["Los Angeles"]}%
          </div>
          <div className="items item--6">
            {teamStreaksAndLast5Results(matchReport, null, "Los Angeles")[1]}
          </div>
          <div className="items item--6">
            {teamStreaksAndLast5Results(matchReport, "W", "Los Angeles")[0]}
          </div>
          <div className="items item--6">
            {teamStreaksAndLast5Results(matchReport, "D", "Los Angeles")[0]}
          </div>
          <div className="items item--6">
            {biggestWin(matchReport, "Los Angeles", "W")}
          </div>
          <div className="items item--6">
            {biggestDefeat(matchReport, "Los Angeles", "D")}
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamTable;
