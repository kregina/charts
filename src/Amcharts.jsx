import React, { useLayoutEffect, useRef } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


import { colorActive, colorLine, colorNoLog } from './data';

am4core.useTheme(am4themes_animated);

const data = [
  {
    year: "2020/01",
    nonactive: 1,
    active: 8,
    logins: 10
  },
  {
    year: "2020/02",
    nonactive: 1.6,
    active: 9,
    logins: 13
  },
  {
    year: "2020/03",
    nonactive: 1.8,
    active: 4,
    logins: 8
  },
  {
    year: "2020/04",
    nonactive: 1,
    active: 8,
    logins: 14
  },
  {
    year: "2020/05",
    nonactive: 1.6,
    active: 9,
    logins: 15
  },
  {
    year: "2020/06",
    nonactive: 1.8,
    active: 4,
    logins: 10
  }
];


const Amcharts = (props) => {
  const chartRef = useRef(null);

  useLayoutEffect(() => {
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.paddingRight = 20;
    chart.data = data;

    chart.colors.list = [
      am4core.color(colorNoLog),
      am4core.color(colorActive),
      am4core.color(colorLine),
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.grid.template.location = 0;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;

    // Create series bar
    const createSeries = (field, name) => {
      
      // Set up series
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.name = name;
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "year";
      series.sequencedInterpolation = true;
      
      // Make it stacked
      series.stacked = true;
      
      // Configure columns
      series.columns.template.width = am4core.percent(60);
      series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";
      
      // Add label
      let labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.label.text = "{valueY}";
      labelBullet.locationY = 0.5;
      labelBullet.label.hideOversized = true;
      
      return series;
    }

    createSeries("nonactive", "Non-active");
    createSeries("active", "Active");


    // Create series
    const seriesLine = chart.series.push(new am4charts.LineSeries());
    seriesLine.name = 'Log-ins';
    seriesLine.dataFields.valueY = "logins";
    seriesLine.dataFields.categoryX = "year";
    seriesLine.tooltipText = "{logins}"
    seriesLine.strokeWidth = 2;
    seriesLine.minBulletDistance = 15;

    // Drop-shaped tooltips
    seriesLine.tooltip.background.cornerRadius = 20;
    seriesLine.tooltip.background.strokeOpacity = 0;
    seriesLine.tooltip.pointerOrientation = "vertical";
    seriesLine.tooltip.label.minWidth = 40;
    seriesLine.tooltip.label.minHeight = 40;
    seriesLine.tooltip.label.textAlign = "middle";

    // Make bullets grow on hover
    var bullet = seriesLine.bullets.push(new am4charts.CircleBullet());
    bullet.circle.strokeWidth = 2;
    bullet.circle.radius = 4;
    bullet.circle.fill = am4core.color(colorLine);

    var bullethover = seriesLine.states.create("hover");
    bullethover.properties.scale = 1.3;

    // Make a panning cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panXY";
    chart.cursor.xAxis = categoryAxis;
    chart.cursor.snapToSeries = seriesLine;

    // Legend
    chart.legend = new am4charts.Legend();

  

    // using the chart
    chartRef.current = chart;

    return () => {
      chart.dispose();
    };
  }, []);

  useLayoutEffect(() => {
    chartRef.current.paddingRight = props.paddingRight;
  }, [props.paddingRight]);

  return (
    <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
  );
}

export default Amcharts;