import React from "react";
import "./TeamsCharts.scss";
import { Bar } from "react-chartjs-2";
import gameInfo from "../GameInfo/GameInfo";
import { percentagesWinsAndLosses } from "./teamsTableFn";
import matchReport from "../../data/matchReports";

const chartsDataObj = {
  winsPercentage: {
    Boston: () => percentagesWinsAndLosses(matchReport, "w", "Boston"),
    "Los Angeles": () => percentagesWinsAndLosses(matchReport, "w", "Los Angeles"),
    "New York": () => percentagesWinsAndLosses(matchReport, "w", "New York"),
    "San Francisco": () => percentagesWinsAndLosses(matchReport, "w", "San Francisco"),
  },
  defeatsPercentage: {
    Boston: () => percentagesWinsAndLosses(matchReport, "L", "Boston"),
    "Los Angeles": () => percentagesWinsAndLosses(matchReport, "L", "Los Angeles"),
    "New York": () => percentagesWinsAndLosses(matchReport, "L", "New York"),
    "San Francisco": () => percentagesWinsAndLosses(matchReport, "L", "San Francisco"),
  },
};

const data = {
  labels: gameInfo.teams,
  datasets: [
    {
      label: "Victories %",
      data: [
        chartsDataObj.winsPercentage.Boston(),
        chartsDataObj.winsPercentage["Los Angeles"](),
        chartsDataObj.winsPercentage["New York"](),
        chartsDataObj.winsPercentage["San Francisco"](),
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
      label: "Defeats %",
      data: [
        chartsDataObj.defeatsPercentage.Boston(),
        chartsDataObj.defeatsPercentage["Los Angeles"](),
        chartsDataObj.defeatsPercentage["New York"](),
        chartsDataObj.defeatsPercentage["San Francisco"](),
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

function TeamsChartWinsAndLossesPercentage() {
  return (
    <div className="TeamsChartWinsAndLossesPercentage">
      <Bar data={data} />
    </div>
  );
}

export default TeamsChartWinsAndLossesPercentage;
