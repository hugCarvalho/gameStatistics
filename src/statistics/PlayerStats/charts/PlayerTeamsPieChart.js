import React from "react";
import { Pie } from "react-chartjs-2";
import { teamStatsPerPlayer } from "../PlayersStatsFn";
import matchReport from "../../../data/matchReports";

//TODO: improve dynamic
const teamStatsHugo = teamStatsPerPlayer(matchReport, "Hugo");
const teamsStatsEddie = teamStatsPerPlayer(matchReport, "Eddie");
console.log("teamStatsHugo", teamStatsHugo);
const data = {
  labels: ["Boston", "Los Angeles", "New York", "San Francisco"],

  datasets: [
    {
      label: "# of Votes",
      data: [
        teamStatsHugo[0][1].won,
        teamStatsHugo[1][1].won,
        teamStatsHugo[2][1].won,
        teamStatsHugo[3][1].won,
        // teamStatsHugo["Los Angeles"].won,
        // teamStatsHugo["New York"].won,
        // teamStatsHugo["San Francisco"].won,
      ],
      backgroundColor: [
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 0.3,
    },
  ],
};

const dataLose = {
  labels: ["Boston", "Los Angeles", "New York", "San Francisco"],

  datasets: [
    {
      label: "# of Votes",
      data: [
        teamStatsHugo[0][1].lost,
        teamStatsHugo[1][1].lost,
        teamStatsHugo[2][1].lost,
        teamStatsHugo[3][1].lost,
        // teamStatsHugo["Los Angeles"].won,
        // teamStatsHugo["New York"].won,
        // teamStatsHugo["San Francisco"].won,
      ],
      backgroundColor: [
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 0.3,
    },
  ],
};

// const name = "Hugo";
const optionsWin = {
  legend: {
    text: "ASDasdasdasdfsfgdgfgdfgfd",
  },
  title: {
    text: `Number of victories with each team`,
    display: true,
  },
};

function PlayerTeamsPieChart() {
  return (
    <div>
      <Pie data={data} options={optionsWin} />
      {/* <Pie data={dataLose} options={options} /> */}
    </div>
  );
}

export default PlayerTeamsPieChart;
