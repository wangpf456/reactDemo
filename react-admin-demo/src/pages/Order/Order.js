import React from 'react'
import ReactEcharts from 'echarts-for-react';
require('echarts/map/js/china.js');

class Order extends React.Component{
	constructor(){
		super()
		this.state = {
			option: {
				dataset: {
					source: [
						['score', 'amount', 'product'],
						[89.3, 58212, 'Matcha Latte'],
						[57.1, 78254, 'Milk Tea'],
						[74.4, 41032, 'Cheese Cocoa'],
						[50.1, 12755, 'Cheese Brownie'],
						[89.7, 20145, 'Matcha Cocoa'],
						[68.1, 79146, 'Tea'],
						[19.6, 91852, 'Orange Juice'],
						[10.6, 101852, 'Lemon Juice'],
						[32.7, 20112, 'Walnut Brownie']
					]
				},
				grid: {containLabel: true},
				xAxis: {name: 'amount'},
				yAxis: {type: 'category'},
				visualMap: {
					orient: 'horizontal',
					left: 'center',
					min: 10,
					max: 100,
					text: ['High Score', 'Low Score'],
					// Map the score column to color
					dimension: 0,
					inRange: {
						color: ['#D7DA8B', '#E15457']
					}
				},
				series: [
					{
						type: 'bar',
						encode: {
							// Map the "amount" column to X axis.
							x: 'amount',
							// Map the "product" column to Y axis
							y: 'product'
						}
					}
				]
			}
		}
	}
	render(){
		return (
			<div>
				<ReactEcharts
					option={this.state.option}
					style={{ height: '400px', width: '100%' }}
					className={'react_for_echarts'}
				/>
			</div>
		)
	}
}

export default Order