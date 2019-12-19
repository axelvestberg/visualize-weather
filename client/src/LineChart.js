import React from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios'

export default class LineChart extends React.Component{

	state = {
		date: [],
		temp: [],
		maxTemp: {
			day: [],
			temp: []
		},
		minTemp: {
			day: [],
			temp: []
		}
	}
	componentDidMount() {
		this.fetchData();
	}
	
	fetchData = () => {
		axios.get('http://localhost:5000/temperature')
		.then(res => {
			console.log(res.data);
			const temp = res.data.map(temp => temp.Angular);
			const date = res.data.map(date => date.Datum);
			this.setState({
				date,
				temp
			})
		})
	}

	calculateLowTemp = () => {
		for (let i = 0; i < this.state.date.length; i++) {
			if (!this.state.maxTemp.day.includes(this.state.date)) {

			}
		}
	}

	getMinTemp = () => {
		let minTemp = Math.min(...this.state.temp);
		return <div>Min Temperature: {minTemp} </div>
	}

	getMaxTemp = () => {
		let maxTemp = Math.max(...this.state.temp)
		return <div>Max Temperature: {maxTemp}</div>;
	}

  render() {
		const data = {
			labels: this.state.date,
			datasets: [
				{
					label: 'Temperature',
					fill: false,
					lineTension: 0.1,
					backgroundColor: 'rgba(75,192,192,0.4)',
					borderColor: 'rgba(75,192,192,1)',
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: 'rgba(75,192,192,1)',
					pointBackgroundColor: '#fff',
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: 'rgba(75,192,192,1)',
					pointHoverBorderColor: 'rgba(220,220,220,1)',
					pointHoverBorderWidth: 2,
					pointRadius: 0.1,
					pointHitRadius: 10,
					data: this.state.temp
				}
			]
		};
		this.getMinTemp();
		this.getMaxTemp();
		return (
      <div>
        <h2>Temp Line Chart</h2>
        <Line height={80} data={data} />
				{this.getMinTemp()}
				{this.getMaxTemp()}
      </div>
    );
  }
};

