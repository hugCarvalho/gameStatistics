import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import matchReport from "../../../data/matchReports";
import { numOfGamesPlayedByPlayer, numOfVictories } from "../PlayersStatsFn";

//TODO: make dynamic

const playerChartsObj = {
  Hugo: {
    wins: () => numOfVictories(matchReport, "Hugo"),
    defeats: () =>
      numOfGamesPlayedByPlayer(matchReport, "Hugo") - numOfVictories(matchReport, "Hugo"),
  },
  Eddie: {
    wins: () => numOfVictories(matchReport, "Eddie"),
    defeats: () =>
      numOfGamesPlayedByPlayer(matchReport, "Eddie") -
      numOfVictories(matchReport, "Eddie"),
  },
};

const data = {
  labels: ["Victories", "Defeats"],
  datasets: [
    {
      label: "Hugo",
      barPercentage: 0.5,
      data: [playerChartsObj.Hugo.wins(), playerChartsObj.Hugo.defeats()],
      backgroundColor: [
        "rgba(75, 192, 192, .5)",
        "rgba(75, 192, 192, .5)",
        "rgba(75, 192, 192, .5)",
        "rgba(75, 192, 192, .5)",
      ],
      borderColor: [
        "rgba(75, 192, 192, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
    {
      label: "Eddie",
      data: [playerChartsObj.Eddie.wins(), playerChartsObj.Eddie.defeats()],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(255, 99, 132, 0.5)",
        "rgba(255, 99, 132, 0.5)",
        "rgba(255, 99, 132, 0.5)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(255, 99, 132, 1)",
      ],
      borderWidth: 1,
      barPercentage: 0.5,
    },
  ],
};

const options = {
  title: {
    display: true,
    text: "Total number of victories and defeats each player",
    fontSize: 16,
  },

  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

function PlayerWinLostChart() {
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
}

export default PlayerWinLostChart;
