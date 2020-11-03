import React from "react";
import { Bar } from "react-chartjs-2";
import matchReport from "../../../data/matchReports";
import { numOfGamesPlayedByPlayer, numOfVictories } from "../fns/PlayersStatsFn";

//TODO: make dynamic
const playerA = "Hugo";
const playerB = "Eddie";

const playerChartsObj = {
  [playerA]: {
    wins: () => numOfVictories(matchReport, playerA),
    defeats: () =>
      numOfGamesPlayedByPlayer(matchReport, playerA) -
      numOfVictories(matchReport, playerA),
  },
  [playerB]: {
    wins: () => numOfVictories(matchReport, playerB),
    defeats: () =>
      numOfGamesPlayedByPlayer(matchReport, playerB) -
      numOfVictories(matchReport, playerB),
  },
};

const data = {
  labels: ["Victories", "Defeats"],
  datasets: [
    {
      label: playerA,
      barPercentage: 0.5,
      data: [playerChartsObj[playerA].wins(), playerChartsObj[playerA].defeats()],
      backgroundColor: ["rgba(153, 205, 50, 0.6)", "rgba(153, 205, 50, 0.6)"],
      borderColor: ["rgba(153, 205, 50, 1)", "rgba(153, 205, 50, 1)"],
      borderWidth: 1,
    },
    {
      label: playerB,
      data: [playerChartsObj[playerB].wins(), playerChartsObj[playerB].defeats()],
      backgroundColor: ["rgb(11, 128, 238, .6)", "rgb(11, 128, 238, .6)"],
      borderColor: ["rgb(11, 128, 238, 1)", "rgb(11, 128, 238, 1)"],
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
