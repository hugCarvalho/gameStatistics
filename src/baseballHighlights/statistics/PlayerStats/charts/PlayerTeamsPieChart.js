import React from "react";
import "./PlayerTeamsPieChart.scss";
import { Pie } from "react-chartjs-2";
import { teamStatsPerPlayer } from "../fns/PlayersStatsFn";
import matchReport from "../../../data/matchReports";

//TODO: improve dynamic content
const teamStatsHugo = teamStatsPerPlayer(matchReport, "Hugo");
const teamStatsEddie = teamStatsPerPlayer(matchReport, "Eddie");

const dataWon = {
  labels: ["Boston", "Los Angeles", "New York", "San Francisco"],

  datasets: [
    {
      data: [
        teamStatsHugo[0][1].won,
        teamStatsHugo[1][1].won,
        teamStatsHugo[2][1].won,
        teamStatsHugo[3][1].won,
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
const dataWon2 = {
  labels: ["Boston", "Los Angeles", "New York", "San Francisco"],

  datasets: [
    {
      label: "# of Votes",
      data: [
        teamStatsEddie[0][1].won,
        teamStatsEddie[1][1].won,
        teamStatsEddie[2][1].won,
        teamStatsEddie[3][1].won,
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
        teamStatsHugo[0][1].lost,
        teamStatsHugo[1][1].lost,
        teamStatsHugo[2][1].lost,
        teamStatsHugo[3][1].lost,
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
        teamStatsEddie[0][1].lost,
        teamStatsEddie[1][1].lost,
        teamStatsEddie[2][1].lost,
        teamStatsEddie[3][1].lost,
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
        <Pie data={dataWon} options={optionsWon} className="top" />
        <Pie data={dataLost} options={optionsLost} />
      </div>
      <div className="wrapper__lost">
        <Pie data={dataWon2} options={optionsWon} className="top" />
        <Pie data={dataLost2} options={optionsLost} />
      </div>
    </div>
  );
}

export default PlayerTeamsPieChart;
