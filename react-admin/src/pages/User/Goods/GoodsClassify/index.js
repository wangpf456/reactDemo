import React from 'react'
import {
    Button,
    Card, //引入卡片
    Table, //引入表格
    Icon,
    Modal, 
} from 'antd';

export default class GoodsClassify extends React.Component{
    state={
        visible: false,
        val: '',
        classification: false,
        value: '',
        subCategory: false
    }
    // 添加分类
    addCategory(){
        this.setState({
            visible: true
        })
    }
    // 修改分类
    userEdit=(item)=>{
        console.log(item)
        this.setState({
            classification: true
        })
    }
    // 查看子分类
    editDetail=(item)=>{
        console.log(item)
        this.setState({
            subName: item.name,
            subCategory: true
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
    getModify(){
        return <input type="text" style={{width: 160}} value={this.state.val} onChange={this.changeValue.bind(this)} /> // 通过绑定this.state中的值来获取，受控组件
    }
    changeValue = (event)=>{
        this.setState({
            value: event.target.value // 想双向绑定，改变输入框中的值时必须使用this.setState的方式
        })
    }
    render(){
        //卡片标题
        const title='产品分类管理'
        //卡片右侧添加按键
        const extra=(
            <Button type='primary' onClick={this.addCategory.bind(this)}>
                <Icon type='plus'/>
                添加
            </Button>
        )
        
        // 表格数据源示例
        const dataSource = [
		    {
		        "parentId": "0",
		        "_id": "5c2ed631f352726338607046",
		        "name": "分类001",
		        "__v": 0
		    },
		    {
		        "parentId": "0",
		        "_id": "5c2ed647f352726338607047",
		        "name": "分类2",
		        "__v": 0
		    },
		    {
		        "parentId": "0",
		        "_id": "5c2ed64cf352726338607048",
		        "name": "1分类3",
		        "__v": 0
		    }
        ];

        //表格列名
        const columns = [
            {
                title: '分类名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '操作',
                width:'29%',
                render: (item) => ( //向操作列所有行输出修改及查看分类两个按钮
                    <div>
                        <Button style={{marginRight: 10}} onClick={this.userEdit.bind(this,item)} size="default" type="primary">修改分类</Button>
                        <Button size="default" onClick={this.editDetail.bind(this,item)} type="primary">查看子分类</Button>
                    </div>
                ),
            },
            
        ];

        return(
            <div className='category'>
                {/*卡片样式组件*/}
                <Card title={title} extra={extra} >
                	{/*表格组件、边框、key为数据源的_id、数据源、列名定义*/}
                    <Table 
                        bordered
                        rowKey='_id'
                        dataSource={dataSource} 
                        columns={columns} 
                    />
                </Card>
                {/* 添加分类弹窗 */}
                <Modal
                    title='添加产品分类'
                    visible={this.state.visible}
                    cancelText='取消'
                    okText='确定'
                    onOk={()=>{
                        this.setState({
                            visible: false,
                            val: ''
                        })
                        localStorage.setItem('cateVal',this.state.val)
                    }}
                    onCancel={()=>{
                        this.setState({
                            visible: false,
                            val: ''
                        })
                    }}
                >
                    <div className="category-content">
                        <span style={{width: 120,marginRight: 10}}>分类名</span>
                        {this.getInput()}
                    </div>
                </Modal>
                {/* 修改分类弹窗 */}
                <Modal
                    title='修改产品分类'
                    visible={this.state.classification}
                    cancelText='取消'
                    okText='确定'
                    onOk={()=>{
                        this.setState({
                            classification: false,
                            value: ''
                        })
                    }}
                    onCancel={()=>{
                        this.setState({
                            classification: false,
                            value: ''
                        })
                    }}
                >
                    <div className="category-content">
                        <span style={{width: 120,marginRight: 10}}>分类名</span>
                        {this.getModify()}
                    </div>
                </Modal>
                {/* 查看子分类 */}
                <Modal
                    title='查看子分类'
                    visible={this.state.subCategory}
                    footer={[]}
                    onCancel={()=>{
                        this.setState({
                            subCategory: false
                        })
                    }}
                >
                    <p>{this.state.subName}</p>
                </Modal>
            </div>
        )
    }
}