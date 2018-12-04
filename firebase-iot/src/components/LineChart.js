import React, { Component } from "react";
import Fire from "./Fire";
import { Line } from "react-chartjs-2";

const rootRef = Fire.database().ref();
const indoorRef = rootRef.orderByChild("index").limitToLast(5);
var labelArr = [];

class LineChart extends Component {
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
          },
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
        maintainAspectRatio: true,
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
    indoorRef.once("value", snapshot => {
      snapshot.forEach(childSnapshot => {
        const oldIndoorDataSet = this.state.lineChartData.datasets[0];
        const oldOutdoorDataSet = this.state.lineChartData.datasets[1];
        const newIndoorDataSet = { ...oldIndoorDataSet };
        newIndoorDataSet.data.push(childSnapshot.val().indoor);
        labelArr.push(childSnapshot.val().time);

        const newChartData = {
          ...this.state.lineChartData,
          datasets: [newIndoorDataSet, oldOutdoorDataSet],
          labels: this.state.lineChartData.labels.concat(labelArr)
        };
        
        this.setState({ lineChartData: newChartData });
      });
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

export default LineChart;
