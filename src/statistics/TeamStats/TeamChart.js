import React from "react";
import "./TeamChart.scss";
import { Bar, Pie } from "react-chartjs-2";
import teams from "../../data/teams";
import percentagesWinsAndLosses from "../TeamStats/TeamsTable";

const data = {
  labels: teams,
  datasets: [
    {
      label: "Victories %",
      data: [12, 19, 0, 5],
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
      data: [0, 1, 2, 3],
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
      data: [10, 20, 30],
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
