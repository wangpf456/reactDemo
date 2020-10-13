import React from 'react'
import { Table, Button } from 'antd';

const columns = [
	{
		title: 'Name',
		dataIndex: 'name'
	},{
		title: 'Age',
		dataIndex: 'age'
	},{
		title: 'Address',
		dataIndex: 'address'
	}
]
const data = []
for(let i = 0;i < 100;i++){
	data.push({
		key: i,
		name: `Edward King ${i}`,
		age: 32,
		address: `London, Park Lane no. ${i}`
	})
}

class WorkOrder extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			selectedRowKeys: [],
			loading: false
		}
		this.start = this.start.bind(this)
		this.onSelectChange = this.onSelectChange.bind(this)
	}
	start(){
		this.setState({loading: true})
		setTimeout(() => {
			this.setState({
				selectedRowKeys: [],
				loading: false
			})
		},1000)
	}
	onSelectChange(selectedRowKeys){
		console.log('selectedRowKeys changed:',selectedRowKeys)
		this.setState({selectedRowKeys})
	}
	render(){
		const {loading,selectedRowKeys} = this.state;
		const rowSelection = {
			selectedRowKeys,
			onChange: this.onSelectChange
		}
		const hasSelected = selectedRowKeys.length > 0;
		return (
			<div>
				<div style={{marginBottom: 16}}>
					<Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
						{hasSelected?'选中':'未选中'}
					</Button>
					<span style={{marginLeft: 8}}>
						{hasSelected ? `选中${selectedRowKeys.length}项`:''}
					</span>
				</div>
				<Table rowSelection={rowSelection} columns={columns} dataSource={data}/>
			</div>
		)
	}
}

export default WorkOrder