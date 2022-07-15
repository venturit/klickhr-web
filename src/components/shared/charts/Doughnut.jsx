import React from "react";
import { Chart as ChartJS, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(Tooltip, Title, ArcElement, Legend);

export const DoughnutChart = ({ labels, values }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: ["#00A8ED", "#FFC431", "#2216AC", "#0063F0"],
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "60%",
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          color: "#343365",
          usePointStyle: true,
          pointStyle: "circle",
          padding: 30,
          font: {
            size: 18,
          },
          boxWidth: 10,
          boxHeight: 10,
        },
      },
      tooltip: {
        enabled: true,
        yAlign: "top",
        backgroundColor: "#FFFFFF",
        borderColor: "#E6E5F8",
        borderWidth: 1,
        bodyColor: "#8280B1",
        cornerRadius: 6,
        displayColors: false,
        padding: 12,
      },
    },
  };

  return (
    <div style={{ width: "40%" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
