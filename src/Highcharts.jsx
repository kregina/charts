import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { colorLine, dataActive, dataLine, dataNoLog, labels } from './data';

const options = {
  title: {
    text: 'Active users count & Log-in development',
    align: 'left'
  },
  xAxis: {
    categories: labels,
    type: 'category',
    labels: {
      rotation: -45,
      style: {
        fontSize: '10px',
        fontFamily: 'Verdana, sans-serif'
      }
    }
  },
  yAxis: {
    title: {
        text: ''
    }
  },
  labels: {
    items: [{
      style: {
        left: '50px',
        top: '18px',
        color: ( // theme
          Highcharts.defaultOptions.title.style &&
          Highcharts.defaultOptions.title.style.color
        ) || 'black'
      }
    }]
  },
  plotOptions: {
    column: {
      stacking: 'normal'
    }
  },
  series: [
    {
      type: 'column',
      name: 'Active',
      data: dataActive
    },
    {
      type: 'column',
      name: 'Non-active',
      data: dataNoLog
    },
    {
      type: 'spline',
      name: 'Log-ins',
      data: dataLine,
      marker: {
        lineColor: colorLine,
        fillColor: colorLine
      }
    },
  ]
};

const HighchartsJs = () => <HighchartsReact highcharts={Highcharts} options={options} />

export default HighchartsJs;