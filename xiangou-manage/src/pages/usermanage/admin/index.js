import React, { Component, createRef } from 'react'
import MyDrawer from '../../../components/MyDrawer'
// import { showDeleteConfirm } from '../../../utils/common'
import LazyLoad from '../../../components/LazyLoad'
import AdminForm from '../../../components/AdminForm'
import NewAdmin from '../../../components/newAdmin'
import {
    Table, 
    Divider, 
    Tag,
    Input,
    Button,
    Row,
    Col,
    Select,
    Modal
} from 'antd'

const Option = Select
const {confirm} = Modal

export default class Admin extends Component {

    constructor (props) {
        super(props)
        
        this.oMyNewDrawer = createRef()
        this.oMyDrawer = createRef()
        this.oLazyLoad = createRef()

        this.state = {
            admin: {},
            data: [
                {
                    key: '1',
                    name: 'John Brown',
                    account: 32,
                    password: '111111',
                    role: '分享管理员',
                    lastLoginTime: '1111',
                    tag: '正常',
                },
                {
                    key: '2',
                    name: 'Jim Green',
                    account: 42,
                    password: 'London No. 1 Lake Park',
                    role: '分享管理员',
                    lastLoginTime: '1111',
                    tag: '正常',
                },
                {
                    key: '3',
                    name: 'Joe Black',
                    account: 32,
                    password: 'Sidney No. 1 Lake Park',
                    role: '超级管理员',
                    lastLoginTime: '1111',
                    tag: '禁用',
                },
                {
                    key: '4',
                    name: 'Tom',
                    account: 50,
                    password: 'Amazing life',
                    role: '超级管理员',
                    lastLoginTime: '1111',
                    tag: '禁用',
                }
            ]
        }
        this.showDeleteConfirm.bind(this)
        window.localStorage.setItem("data",JSON.stringify(this.state.data))
    }
    
    //
    handleChange = value => {
        console.log(`selected ${value}`)
    }
    //显示新增管理员的抽屉
    toggleNewAdmin(){
        this.oMyNewDrawer.current.showDrawer()
    }
    // 显示修改隐藏抽屉
    toggleDrawer = record => {
        console.log(record)
        this.setState({
            admin: record
        })
        this.oMyDrawer.current.showDrawer()
    }

    // 显示隐藏懒加载
    toggleLazyLoad = () => {
        this.oLazyLoad.current.toggleSpinning()
        setTimeout(() => {
            this.oLazyLoad.current.toggleSpinning()
        }, 2000)
    }

    // 修改标签状态
    toggelTagStatus = (e) => {
        // 之后对接数据在修改此时页面的同时地发请求修改数据库中的数据
        if (e.target.innerHTML === '正常') {
            e.target.innerHTML = '禁用'
            e.target.className = 'ant-tag ant-tag-red'
        } else {
            e.target.innerHTML = '正常'
            e.target.className = 'ant-tag ant-tag-green'
        }
    }
    deleteTable(key){
        let {data} = this.state
        data = this.findKey(data,key)
        this.setState({
            data: data
        })
        localStorage.setItem('data',JSON.stringify(this.state.data))
    }
    showDeleteConfirm (key){
        confirm({
            title: '您确定要删除这条记录吗?',
            // content: 'Some descriptions',
            okText: '确定',
            okType: 'danger',
            cancelText: '取消',
            onOk: () => this.deleteTable(key),
            onCancel() {
                console.log('Cancel')
            },
        })
    }

    findKey = (data,key) => {
        data.forEach((item,index,data) => {
            if(item.key == key){
                data.splice(index,1)
            }
        });
        return data;
    }
 
    render () {
        const newData = JSON.parse(window.localStorage.getItem('data'))
        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                render: text => <p>{ text }</p>,
            },
            {
                title: '账号',
                dataIndex: 'account',
                key: 'account',
            },
            {
                title: '密码',
                dataIndex: 'password',
                key: 'password',
            },
            {
                title: '角色',
                dataIndex: 'role',
                key: 'role',
            },
            {
                title: '上次登录时间',
                dataIndex: 'lastLoginTime',
                key: 'lastLoginTime',
            },
            {
                title: '账号状态',
                key: 'tag',
                dataIndex: 'tag',
                render: tag => {
                        let color = 'green'
                        if (tag === '禁用') {
                            color = 'red'
                        }
                        return (
                        <span>
                            <Tag color={color} onClick={(e) => this.toggelTagStatus(e)}>
                                {tag}
                            </Tag>
                        </span>
                    );
                }
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <Button size="small" type="primary" ghost onClick={() => this.toggleDrawer(record)}>修改</Button>
                        <Divider type="vertical" />
                        <Button size="small" type="danger" ghost  onClick={() => this.showDeleteConfirm(record.key)}>删除</Button>
                    </span>
                ),
            },
        ]

        return (
            <div>
                <LazyLoad ref={this.oLazyLoad}>
                    <div className="searchControl">
                        <Row gutter={24}>
                            <Col span={4}>
                                <Input placeholder="请输入姓名"/>       
                            </Col>
                            <Col span={4}>
                                <Input placeholder="请输入账号" />
                            </Col>
                            <Col span={5}>
                                <Select defaultValue="ordinaryManager" style={{ width: 180 }} onChange={ this.handleChange }>
                                    <Option value="superManager">超级管理员</Option>
                                    <Option value="shareManager">分享管理员</Option>
                                    <Option value="ordinaryManager">普通管理员</Option>
                                </Select>
                            </Col>
                            <Col span={10}>
                                <Button type="primary">筛选</Button>
                                &nbsp;&nbsp;&nbsp;
                                <Button>重置</Button>
                            </Col>
                        </Row>
                    </div>
                    <br/><br/>
                    <Table bordered={ true } columns={columns} dataSource={newData}/>
                    <Button type="primary" onClick={() => this.toggleNewAdmin()}>新增管理员</Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button type="primary" onClick={() => this.toggleLazyLoad()}>同步管理员</Button>
                    <MyDrawer ref={this.oMyNewDrawer} title='新增管理员'>
                        <NewAdmin/>
                    </MyDrawer>
                    <MyDrawer ref={this.oMyDrawer} title={this.state.admin.name}>
                        <AdminForm adminInfo={this.state.admin}/>
                    </MyDrawer>
                </LazyLoad>
            </div>
        )
    }
}