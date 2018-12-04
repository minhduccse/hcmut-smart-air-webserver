import React, { Component } from "react";
import Fire from "./Fire";
import { Line } from "react-chartjs-2";

const rootRef = Fire.database().ref();
const outdoorRef = rootRef.child("outdoor");
const outdoorDataChart = outdoorRef.orderByChild("index").limitToLast(5);
var labelTemp;

class OutdoorChart extends Component {
  constructor() {
    super();
    this.state = {
      lineChartData: {
        labels: [],
        datasets: [
          {
            label: "Outdoor Temperature",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#ffe3af",
            borderColor: "#ff9900",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            borderWidth: "2",
            cubicInterpolationMode: "monotone",
            pointBorderColor: "#ffe3af",
            pointBackgroundColor: "#ff9900",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#ffe3af",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 3,
            pointHitRadius: 10,
            data: []
          }
        ]
      },
      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          enabled: true
        },
        scales: {
          xAxes: [
            {
              ticks: {
                autoSkip: true,
                maxTicksLimit: 10
              }
            }
          ]
        }
      }
    };
  }

  componentDidMount() {
    outdoorDataChart.on("child_added", snapshot => {
      const oldOutdoorDataSet = this.state.lineChartData.datasets[0];
      const newOutdoorDataSet = { ...oldOutdoorDataSet };

      newOutdoorDataSet.data.push(snapshot.val().value);
      labelTemp = snapshot.val().time;

      const newChartData = {
        ...this.state.lineChartData,
        datasets: [newOutdoorDataSet],
        labels: this.state.lineChartData.labels.concat(labelTemp)
      };

      this.setState({ lineChartData: newChartData });
    });
  }

  render() {
    return (
      <div>
        <Line
          data={this.state.lineChartData}
          options={this.state.lineChartOptions}
        />
      </div>
    );
  }
}

export default OutdoorChart;
