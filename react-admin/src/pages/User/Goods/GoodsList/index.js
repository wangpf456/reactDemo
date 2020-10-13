import React from 'react'
import Etable from '../../../../common/Etable'
import { updateSelectedItem } from '../../../../utils'
import './index.css'

import { Select,Input,Button,Modal } from 'antd';
const { Option } = Select;
const { Search } = Input;

export default class GoodsList extends React.Component{
    state = {
        isLoggedIn: true,
        selectId:[
            {
                value: '1'
            },{
                value: '2'
            },{
                value: '3'
            },{
                value: '4'
            },{
                value: '5'
            },{
                value: '6'
            },{
                value: '7'
            },{
                value: '8'
            },{
                value: '9'
            },{
                value: '10'
            }
        ],
        rowSelection:{
            selectedRowKeys:[],
            selectedRows:[],
        },
        value: '',
        val: '',
        visibleFlag:false,
        visible: false,
        type:'radio',
        dataSource:[
            {
                id: '26',
                name:'裤子',
                message: 'xxxxxxxxx',
                price: '￥999',
                index: '1'
            },{
                id: '27',
                name:'风衣',
                message: 'hicpkeiuhwuih',
                price: '￥90',
                index: '2'
            }
        ],
        columns: [
            {
                title:'商品ID',
                dataIndex:'id'
            },
            {
                title:'商品名称',
                dataIndex: 'name'
            },
            {
                title:'商品信息',
                dataIndex:'message'
            },
            {
                title:'价格',
                dataIndex:'price'
            },
            {
                title:'状态',
                render:(item)=>{
                    const isLoggedIn = this.state.isLoggedIn;
                    let button = null;  //button 为元素变量
                    if (isLoggedIn) {
                        button = <Button style={{marginRight: 10}} onClick={this.offShelf.bind(this,item)} size="small" type="danger">下架</Button>
                    } else {
                        button = <Button size="small" onClick={this.onShelf.bind(this,item)} type="default">上架</Button>
                    }
                    return (
                        <div>
                            <Button style={{marginRight: 10}} size="small" type="primary">在售</Button>
                            {button}
                        </div>
                    )
                }
            },
            {
                title:'操作',
                render:(item)=>{
                    return (
                        <div>
                            <Button style={{marginRight: 10}} onClick={this.editDetail.bind(this,item)} size="small" type="primary">详情</Button>
                            <Button size="small" onClick={this.userEdit.bind(this,item)} type="primary">编辑</Button>
                        </div>
                    )
                }
            }
        ]
    }
    // 下架
    offShelf=(item)=>{
        console.log(item)
    }
    // 上架
    onShelf=(item)=>{
        console.log(item)
    }
    // 编辑
    userEdit=(item)=>{
        console.log(item)
        this.setState({
            visible:true,
            name: item.name,
            message: item.message,
            price: item.price
        })
    }
    // 详情
    editDetail=(item)=>{
        console.log(item)
        this.setState({
            visibleFlag: true,
            detailName: item.name,
            detailMess: item.message
        })
    }
    handleChange(value) {
        console.log(`selected ${value}`);
    }
    geiInput() {
        return <input type="text" style={{width: 160}} value={this.state.value} onChange={this.changeValue.bind(this)} /> // 通过绑定this.state中的值来获取，受控组件
    }
    changeValue = (event)=>{
        this.setState({
            value: event.target.value // 想双向绑定，改变输入框中的值时必须使用this.setState的方式
        })
    }
    getInput(){
        return <input type="text" style={{width: 160}} value={this.state.val} onChange={this.changeVal.bind(this)} /> // 通过绑定this.state中的值来获取，受控组件
    }
    changeVal = (event)=>{
        this.setState({
            val: event.target.value // 想双向绑定，改变输入框中的值时必须使用this.setState的方式
        })
    }
    handleSubmit(){
        console.log(this.state.value,this.state.val)
        this.setState({
            visible: false
        })
    }
    render(){
        const {selectId,columns} = this.state
        return (
            <div>
                <div className='listHeader'>
                    <div className='list-header'>
                        <Select defaultValue="按商品ID查询" style={{ width: 120 }} onChange={this.handleChange.bind(this)}>
                {selectId.map((item,index) => <Option value={item.value} key={index}>{item.value}</Option>)}
                        </Select>
                        <Search style={{width: 200,marginLeft: 20}} placeholder="关键字" onSearch={value => console.log(value)} enterButton='搜索' />
                    </div>
                    <div className='list-body'>
                        <Etable
                            that={this}
                            dataSource={this.state.dataSource}
                            columns={columns}
                            rowSelection={this.state.rowSelection}
                            updateSelectedItem={updateSelectedItem.bind(this)}
                            pagination={this.state.pagination}
                            type={this.state.type}
                        />
                    </div>
                    {/* 详情弹窗 */}
                    <Modal
                        title={this.state.detailName}
                        visible={this.state.visibleFlag}
                        footer={[]}
                        onCancel={() => {
                            this.setState({
                                visibleFlag: false
                            })
                        }}
                    >
                        <p>{this.state.detailMess}</p>
                    </Modal>
                    {/* 编辑弹窗 */}
                    <Modal
                        title={this.state.name}
                        visible={this.state.visible}
                        cancelText='取消'
                        okText='确定'
                        onOk={this.handleSubmit.bind(this)}
                        onCancel={() => {
                            this.setState({
                                visible: false
                            })
                        }}
                    >
                        <div className='modalInput'>
                            <div style={{width: 80}}>
                                <span>商品信息</span>
                                <span>{this.state.message}</span>
                            </div>
                            {this.geiInput()}
                        </div>
                        <div className='modalInput'>
                            <div style={{width: 80}}>
                                <span>商品价格</span>
                                <span>原价:{this.state.price}</span>
                            </div>
                            {this.getInput()}
                        </div>
                    </Modal>   
                </div>
            </div>
        )
    }
}