import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
const labels=["January", "February", "March", "April", "May"]
const BarChart = () => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>삼육대 학교</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
