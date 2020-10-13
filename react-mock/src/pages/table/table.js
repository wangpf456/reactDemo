import React,{Component} from 'react'
import { Table } from 'antd';

const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex',
    },{
        title: '职业',
        dataIndex: 'job',
        key: 'job'
    }
  ];

export default class TableList extends Component{
    render(){
        let data = this.props.data
        return(
            <div>
                <Table
                  columns={columns}
                  dataSource={data}
                  bordered
                />
            </div>
        )
    }
}