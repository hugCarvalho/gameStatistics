import React from "react";
import "./PlayerTeamsPieChart.scss";
import { Pie } from "react-chartjs-2";
import { teamStatsPerPlayer } from "../fns/PlayersStatsFn";
import matchReport from "../../../data/matchReports";

//TODO: improve dynamic behaviour
const teamStatsPlayerA = teamStatsPerPlayer(matchReport, "Hugo");
const teamStatsPlayerB = teamStatsPerPlayer(matchReport, "Eddie");

const dataWonA = {
  labels: ["Boston", "Los Angeles", "New York", "San Francisco"],

  datasets: [
    {
      data: [
        teamStatsPlayerA[0][1].won,
        teamStatsPlayerA[1][1].won,
        teamStatsPlayerA[2][1].won,
        teamStatsPlayerA[3][1].won,
      ],
      backgroundColor: [
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgb(94, 205, 50, .3)",
      ],
      borderColor: [
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(153, 102, 255, 1)",
        "rgb(94, 205, 50, 1)",
      ],
      borderWidth: 0.3,
    },
  ],
};
const dataWonB = {
  labels: ["Boston", "Los Angeles", "New York", "San Francisco"],

  datasets: [
    {
      label: "# of Votes",
      data: [
        teamStatsPlayerB[0][1].won,
        teamStatsPlayerB[1][1].won,
        teamStatsPlayerB[2][1].won,
        teamStatsPlayerB[3][1].won,
      ],
      backgroundColor: [
        "rgba(54, 162, 235, 0.3)",
        "rgba(255, 206, 86, 0.3)",
        "rgba(153, 102, 255, 0.3)",
        "rgb(94, 205, 50, .3)",
      ],
      borderColor: [
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(153, 102, 255, 1)",
        "rgb(94, 205, 50, 1)",
      ],
      borderWidth: 0.3,
    },
  ],
};

const dataLost = {
  labels: ["Boston", "Los Angeles", "New York", "San Francisco"],

  datasets: [
    {
      label: "# of Votes",
      data: [
        teamStatsPlayerA[0][1].lost,
        teamStatsPlayerA[1][1].lost,
        teamStatsPlayerA[2][1].lost,
        teamStatsPlayerA[3][1].lost,
      ],
      backgroundColor: [
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgb(94, 205, 50, .3)",
      ],
      borderColor: [
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(153, 102, 255, 1)",
        "rgb(94, 205, 50, 1)",
      ],
      borderWidth: 0.3,
    },
  ],
};
const dataLost2 = {
  labels: ["Boston", "Los Angeles", "New York", "San Francisco"],

  datasets: [
    {
      label: "# of Votes",
      data: [
        teamStatsPlayerB[0][1].lost,
        teamStatsPlayerB[1][1].lost,
        teamStatsPlayerB[2][1].lost,
        teamStatsPlayerB[3][1].lost,
      ],
      backgroundColor: [
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgb(94, 205, 50, .3)",
      ],
      borderColor: [
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(153, 102, 255, 1)",
        "rgb(94, 205, 50, 1)",
      ],
      borderWidth: 0.3,
    },
  ],
};

const optionsWon = {
  title: {
    text: `Number of victories with each team`,
    display: true,
  },
};
const optionsLost = {
  title: {
    text: `Number of defeats with each team`,
    display: true,
  },
};

function PlayerTeamsPieChart() {
  return (
    <div className="PlayerTeamsPieChart">
      <div className="wrapper__won">
        <Pie data={dataWonA} options={optionsWon} className="top" />
        <Pie data={dataLost} options={optionsLost} />
      </div>
      <div className="wrapper__lost">
        <Pie data={dataWonB} options={optionsWon} className="top" />
        <Pie data={dataLost2} options={optionsLost} />
      </div>
    </div>
  );
}

export default PlayerTeamsPieChart;
