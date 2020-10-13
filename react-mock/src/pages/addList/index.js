import React from 'react'

class AddList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:[
                {
                    name: '学react',
                    finish: false
                },{
                    name: '学vue',
                    finish: false
                },{
                    name: '学小程序',
                    finish: false
                }
            ],
            newEvent: ''
        }
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.finishItem = this.finishItem.bind(this)
    }
    addItem(val){
        if(!val){
            alert('请填写项目名称')
            return
        }
        // 直接覆盖 而不是更新
        const newData = this.state.data.concat({name: val,finish: false})
        this.setState({
            data: newData
        })
    }
    finishItem(index){
        const list = this.state.data
        list[index].finish = !list[index].finish
        this.setState({
            data: list
        })
    }
    deleteItem(index){
        const list = this.state.data
        list.splice(index,1)
        this.setState({
            data:list
        })
    }
    render(){
        return(
            <div>
            <InputBox newEvent={this.state.newEvent} addItem={this.addItem}/>
            <List list={this.state.data} deleteItem={this.deleteItem} finishItem={this.finishItem}/>
            </div>
        )
    }
}

var inputStyle = {
    display: 'flex',
    justifyContent: 'center'
}

class InputBox extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            newEvent: props.newEvent
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({
            newEvent: e.target.value
        })
    }
    render(){
        return(
            <div className='input-wrap' style={inputStyle}>
                <input type='text' value={this.state.newEvent} onChange={this.handleChange}/>
                <button onClick={() => this.props.addItem(this.state.newEvent)}>新增</button>
            </div>
        )
    }
}
var myStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '5px',
    marginBottom: '5px'
}
var btnStyle = {
    marginRight: '10px'
}
class List extends React.Component{
    render(){
        return(
            <ul>
                {this.props.list.map((item,index) => {
                    return (
                        <li key={index} style={myStyle}>
                            <div className={item.finish ? 'finishItem': ''}>{item.name}</div>
                            <div className='button'>
                                <button onClick={() => this.props.finishItem(index)} style={btnStyle}>{item.finish ? '撤销完成' : '已完成'}</button>
                                <button onClick={() => this.props.deleteItem(index)}>删除</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default AddList