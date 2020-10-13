import React from 'react'
import {InputNumber,Button} from 'antd'
import {connect} from 'react-redux'
import './index.css'

class NumberList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            disabled: false,
            day: 0,
            hour: 0,
            minute: 0,
            second: 0
        }
    }
    componentDidMount() {
        const end = Date.parse(new Date('2020-09-30 24:00'))
        this.countFun(end);
    }
    
    //卸载组件取消倒计时
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    
    countFun = (end) => { 
        let now_time = Date.parse(new Date());
        var remaining = end - now_time;

        this.timer = setInterval(() => {
            //防止出现负数
            if (remaining > 1000) {
                remaining -= 1000;
                let day = Math.floor((remaining / 1000 / 3600) / 24);
                let hour = Math.floor((remaining / 1000 / 3600) % 24);
                let minute = Math.floor((remaining / 1000 / 60) % 60);
                let second = Math.floor(remaining / 1000 % 60);
        
                this.setState({
                    day:day,
                    hour:hour < 10 ? "0" + hour : hour,
                    minute:minute < 10 ? "0" + minute : minute,
                    second:second < 10 ? "0" + second : second
                })
            } else {
                clearInterval(this.timer);
                //倒计时结束时触发父组件的方法
                //this.props.timeEnd();
            }
        }, 1000);
    }

    toggle = () => {
        this.setState({
            disabled: !this.state.disabled
        },() => {
            this.props.aa(this.state.disabled)
        })
    }
    render(){
        return(
            <div className="inputContent">
                <InputNumber min={0} max={10} step={0.1} disabled={this.state.disabled}/>
                <Button onClick={this.toggle} type="primary">
                    {this.state.disabled ? '禁止输入' : '允许输入'}
                </Button>
                <p>
                    <span>距离十一还有</span>
                    <span>{this.state.day}天 {this.state.hour}:{this.state.minute}:{this.state.second}</span>
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = (dispatch) => ({
    aa:(kk) => {
        dispatch({
            type:'AA',
            value: kk
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(NumberList)