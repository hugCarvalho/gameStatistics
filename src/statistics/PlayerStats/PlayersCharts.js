import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import matchReport from "../../data/matchReports";
import { numOfGamesPlayedByPlayer, numOfVictories } from "./PlayersStatsFn";

//TODO: make dynamic

let playerChartsObj = {
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

const data2 = {
  datasets: [
    {
      data: [
        4,
        8,
        1,
        // playerChartsObj.Boston.wins(),
        // chartsDataObj.defeatsPercentage.Boston(),
        // chartsDataObj.defeatsPercentage["Los Angeles"](),
        // chartsDataObj.defeatsPercentage["New York"](),
        // chartsDataObj.defeatsPercentage["San Francisco"](),
      ],
      backgroundColor: [
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
    },
  ],
  // options: {
  //   title: "WORK!!!",
  // },

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ["Boston", "Yellow", "Blue"],
};

//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(255, 159, 64, 0.2)",
//       ],
//       borderColor: [
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)",

const data = {
  labels: ["Victories", "Defeats"],
  defaults: { scale: { ticks: { min: 0 } } },
  options: {
    title: {
      display: true,
      text: "Average Rainfall per month",
      fontSize: 20,
    },
    legend: {
      display: true,
      position: "right",
    },
  },
  datasets: [
    {
      label: "HUGO",
      data: [
        playerChartsObj.Hugo.wins(),
        playerChartsObj.Hugo.defeats(),
        // chartsDataObj.winsPercentage.Boston(),
        // chartsDataObj.winsPercentage["Los Angeles"](),
        // chartsDataObj.winsPercentage["New York"](),
        // chartsDataObj.winsPercentage["San Francisco"](),
      ],
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
      barPercentage: 0.7,
    },
    {
      label: "Eddie",
      data: [
        playerChartsObj.Eddie.wins(),
        playerChartsObj.Eddie.defeats(),
        // chartsDataObj.defeatsPercentage.Boston(),
        // chartsDataObj.defeatsPercentage["Los Angeles"](),
        // chartsDataObj.defeatsPercentage["New York"](),
        // chartsDataObj.defeatsPercentage["San Francisco"](),
      ],
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
      barPercentage: 0.7,
    },
  ],
};

const options = {
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

// const data2 = {
//   labels: ["Hugo", "Eddie"],

//   datasets: [
//     {
//       order: 0,
//       barPercentage: 0.5,
//       minBarLength: 50,
//       label: "WINS",
//       data: [2, 4, 9],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(255, 159, 64, 0.2)",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)",
//       ],
//       borderWidth: 5,
//     },
//     {
//       label: "DEFEATS",
//       data: [1, 3, 6],
//     },
//   ], //array of objects, each object corresponds to a line in the chart
// };

function PlayerCharts() {
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
}

export default PlayerCharts;
