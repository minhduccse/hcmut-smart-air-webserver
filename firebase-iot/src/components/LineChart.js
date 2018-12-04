import React, { Component } from "react";
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Indoor Temperature',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#7cb9ff',
      borderColor: '#006be6',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			borderWidth: "2",
			cubicInterpolationMode: "monotone",
      pointBorderColor: '#7cb9ff',
      pointBackgroundColor: '#006be6',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#7cb9ff',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
			pointHitRadius: 10,
      data: [29, 30, 30, 30, 29, 29, 28]
		},
		{
      label: 'Outdoor Temperature',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#ffe3af',
      borderColor: '#ff9900',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			borderWidth: "2",
			cubicInterpolationMode: "monotone",
      pointBorderColor: '#ffe3af',
      pointBackgroundColor: '#ff9900',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#ffe3af',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
			pointHitRadius: 10,
      data: [34, 35, 35, 35, 34, 32, 30]
    }
  ]
};

class LineChart extends Component {
	render() {
		return (
			<div>
				<Line data={data}/>
			</div>
		);
	}
}

export default LineChart;
