import React from "react";
import "../Charts/Chart.css";
import ChartBar from "../Charts/ChartBar";
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); //array of values comes when you select from dropdown
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="Chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
