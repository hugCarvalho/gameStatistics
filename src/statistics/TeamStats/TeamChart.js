import React from "react";
import "./TeamChart.scss";
import { Bar, Pie } from "react-chartjs-2";
import teams from "../../data/teams";
import {
  percentagesWinsAndLosses,
  numOfWinsEachTeam,
  numOfGamesEachTeam,
} from "../TeamStats/teamsTableFn";
import matchReport from "../../data/matchReports";

// const percentagesWinsAndLossesGlobal = (matchReport, matchResult) => {
//   let objW = {};
//   const objL = {};
//   console.log(matchReport);
//   matchReport.forEach((game) => {
//     const { playerA, playerB } = game;
//     // // console.log("playerA", playerA);
//     if (playerA.won) {
//       if (!objW[playerA.team]) objW[playerA.team] = 0;
//       objW[playerA.team] += 1;
//       console.log("objW", objW);
//     }
//     if (playerB.won) {
//       if (!objW[playerB.team]) objW[playerB.team] = 0;
//       objW[playerB.team] += 1;
//     }
//     if (!playerA.won) {
//       if (!objL[playerA.team]) objL[playerA.team] = 0;
//       objL[playerA.team] += 1;
//     }
//     if (!playerB.won) {
//       if (!objL[playerB.team]) objL[playerB.team] = 0;
//       objL[playerB.team] += 1;
//     }
//   });
//   let victories = [];
//   objW = Object.entries(objW).sort((a, b) => a - b);
//   // matchResult === "w" ?
//   console.log(objW, objL);
// };
// percentagesWinsAndLossesGlobal(matchReport, "w");

const chartsData = {
  wins: {
    Boston: () => percentagesWinsAndLosses(matchReport, "w", "Boston"),
    "Los Angeles": () =>
      percentagesWinsAndLosses(matchReport, "w", "Los Angeles"),
    "New York": () => percentagesWinsAndLosses(matchReport, "w", "New York"),
    "San Francisco": () =>
      percentagesWinsAndLosses(matchReport, "w", "San Francisco"),
  },
  defeats: {
    Boston: () => percentagesWinsAndLosses(matchReport, "L", "Boston"),
    "Los Angeles": () =>
      percentagesWinsAndLosses(matchReport, "L", "Los Angeles"),
    "New York": () => percentagesWinsAndLosses(matchReport, "L", "New York"),
    "San Francisco": () =>
      percentagesWinsAndLosses(matchReport, "L", "San Francisco"),
  },
};

console.log("chartsData.wins", chartsData.defeats["Los Angeles"]());
const data = {
  labels: teams,
  datasets: [
    {
      label: "Victories %",
      data: [
        chartsData.wins.Boston(),
        chartsData.wins["Los Angeles"](),
        chartsData.wins["New York"](),
        chartsData.wins["San Francisco"](),
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
    },
    {
      label: "Defeats %",
      data: [
        chartsData.defeats.Boston(),
        chartsData.defeats["Los Angeles"](),
        chartsData.defeats["New York"](),
        chartsData.defeats["San Francisco"](),
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
    },
  ],
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
};

const data2 = {
  datasets: [
    {
      data: [
        chartsData.defeats.Boston(),
        chartsData.defeats["Los Angeles"](),
        chartsData.defeats["New York"](),
        chartsData.defeats["San Francisco"](),
      ],
      backgroundColor: [
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
    },
  ],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ["Boston", "Yellow", "Blue"],
};

function TeamChart() {
  return (
    <div className="TeamChart">
      <Bar data={data} />
      <Pie data={data2} />
    </div>
  );
}

export default TeamChart;

// const data = {
//   // labels: ["Wins", "Defeats"],

//   datasets: [
//     {
//       order: 0,
//       barPercentage: 0.5,
//       minBarLength: 50,
//       label: "WINS",
//       data: [9],
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
//       borderWidth: 1,
//     },

//     {
//       label: ["Hugo"],
//       data: [3],
//     },
//   ], //array of objects, each object corresponds to a line in the chart
// };
