import React from 'react';
import { Bar } from 'react-chartjs-2';
import { colorActive, colorLine, colorNoLog, dataActive, dataLine, dataNoLog, labels } from './data';

const data = {
  labels: labels,
  datasets: [
    {
      type: 'line',
      label: 'Log-ins',
      borderColor: colorLine,
      borderWidth: 2,
      fill: false,
      data: dataLine,
    },
    {
      label: 'Non-active',
      data: dataNoLog,
      backgroundColor: colorNoLog,
    },
    {
      label: 'Active',
      data: dataActive,
      backgroundColor: colorActive,
    },
  ],
};

const options = {
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      grid: {
        display: false,
      }
    }
  },
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Active users count & Log-in development',
      align: 'start'
    }
  }
};

const ChartJs = () => <Bar data={data} options={options} />;

export default ChartJs;