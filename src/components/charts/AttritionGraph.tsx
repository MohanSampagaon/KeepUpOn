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
  ChartData,
  ChartOptions,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const labels = ['February', 'March', 'April', 'May', 'June', 'July'];

const createGradient = (ctx: CanvasRenderingContext2D, color: string) => {
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, color);
  gradient.addColorStop(1, `${color}80`); // Adding some transparency
  return gradient;
};

const AttritionGraph: React.FC = () => {
  const chartRef = useRef<ChartJS<'bar'>>(null);
  const [chartData, setChartData] = useState<ChartData<'bar'>>({
    labels,
    datasets: [],
  });

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.ctx as CanvasRenderingContext2D;
      setChartData({
        labels,
        datasets: [
          {
            label: 'High Risk',
            data: [9, 3, 5, 2, 3, 9],
            backgroundColor: createGradient(ctx, '#FF6384'),
            borderColor: '#FF6384',
            borderWidth: 1,
          },
          {
            label: 'Medium Risk',
            data: [10, 7, 8, 3, 6, 4],
            backgroundColor: createGradient(ctx, '#FF681E'),
            borderColor: '#FF681E',
            borderWidth: 1,
          },
          {
            label: 'Low Risk',
            data: [15, 12, 6, 9, 4, 7],
            backgroundColor: createGradient(ctx, '#069C56'),
            borderColor: '#069C56',
            borderWidth: 1,
          },
        ],
      });
    }
  }, []);

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        onClick: (e, legendItem, legend) => {
          const chart = legend.chart;
          const index = legendItem.datasetIndex || 0;
          const dataset = chart.data.datasets[index];
          
          dataset.hidden = !dataset.hidden;
          chart.update('none'); // Animate without delay
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
    animation: {
      duration: 1000, // Set animation duration for on-load animation
    },
    scales: {
      x: {
        categoryPercentage: 0.6, // Adjusts spacing between months
        barPercentage: 1.0, // Ensures no gap between bars in the same month
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar ref={chartRef} data={chartData} options={options} />;
};

export default AttritionGraph;
