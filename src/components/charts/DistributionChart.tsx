import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DistributionChart = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const labels = [ "mental Health", "Career Oppurtunity", "Personal", "Motivation"];
  const mainData = [40, 30, 50, 25];
  const subData = [
    13, 12, 15,
    8, 12, 10,
    25, 10, 15,
    18, 4, 3
  ];

  const mainColors = ["#AFC000", '#FF6384', '#36A2EB', '#FFCE56'];
  const grayColor = '#D3D3D3';
  const subColors = [
    '#FF6384', '#FF681E', '#069C56',
    '#FF6384', '#FF681E', '#069C56',
    '#FF6384', '#FF681E', '#069C56',
    '#FF6384', '#FF681E', '#069C56',
  ];

  const highlightedSubColors = subData.map((_, index) => {
    const sectionIndex = Math.floor(index / 3);
    return hoveredSection === sectionIndex ? subColors[index] : grayColor;
  });

  const data = {
    datasets: [
      {
        labels: [],
        data: subData,
        backgroundColor: highlightedSubColors,
        borderWidth: 1,
        hoverOffset: 0,
      },
      {
        data: mainData,
        backgroundColor: mainColors,
        borderWidth: 1,
        hoverOffset: 0,
        cutout: '40%',
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '40%',
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        display: false,
      },
    },
    animation: {
      duration: 0,
    },
    onHover: (_event: any, chartElement: string | any[]) => {
      if (chartElement.length > 0 && chartElement[0].datasetIndex === 1) {
        const index = chartElement[0].index;
        setHoveredSection(index);
      } else {
        setHoveredSection(null);
      }
    },
  };
  return <Doughnut data={data} options={options} />;
};

export default DistributionChart;
