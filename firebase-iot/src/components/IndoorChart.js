import React, { Component } from "react";
import Fire from "./Fire";
import { Line } from "react-chartjs-2";

const rootRef = Fire.database().ref();
const indoorRef = rootRef.child("indoor");
const indoorDataChart = indoorRef.orderByChild("index").limitToLast(5);
var labelTemp;

class IndoorChart extends Component {
  constructor() {
    super();
    this.state = {
      lineChartData: {
        labels: [],
        datasets: [
          {
            label: "Indoor Temperature",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#7cb9ff",
            borderColor: "#006be6",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            borderWidth: "2",
            cubicInterpolationMode: "monotone",
            pointBorderColor: "#7cb9ff",
            pointBackgroundColor: "#006be6",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#7cb9ff",
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
    indoorDataChart.on("child_added", snapshot => {
      const oldIndoorDataSet = this.state.lineChartData.datasets[0];
      const newIndoorDataSet = { ...oldIndoorDataSet };

      newIndoorDataSet.data.push(snapshot.val().value);
      labelTemp = snapshot.val().time;

      const newChartData = {
        ...this.state.lineChartData,
        datasets: [newIndoorDataSet],
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

export default IndoorChart;
