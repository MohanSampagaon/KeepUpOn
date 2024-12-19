import React, { useRef, useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const labels = ['Do Not', 'Meet', 'Exceed'];

const CriticalityChart = () => {
const chartData = {
  labels: labels,
    datasets: [
        {
            label: 'High Critical',
            data: [8, 4, 12],
            backgroundColor: '#FF6384',
            borderColor: '#FF6384',
            borderWidth: 1,
        },{
          label: 'Medium Critical',
          data: [2, 4, 7],
          backgroundColor: '#FF681E',
          borderColor: '#FF681E',
          borderWidth: 1,
      },
      {
        label: 'Low Critical',
        data: [6, 5, 8],
        backgroundColor: '#66BB6A',
        borderColor: '#43A047',
        borderWidth: 1,
    },
    ],
}

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      x: {
        categoryPercentage: 0.6, // Adjust spacing between months
        barPercentage: 0.8, // Remove spacing between bars in the same month
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default CriticalityChart;
