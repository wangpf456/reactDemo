import React,{ Fragment } from 'react';
import './calculator.css'

class Calculator extends React.Component {
    //构造函数
    constructor(props){
        //
        super(props)
        this.state = {
            //定义变量 这是数据            
            number1:0,
            number2:0,
            sum:0,
        }
    }
    inputchange_num1(e){
        this.setState({
            number1: e.target.value
        })           
    }
    inputchange_num2(e){
        this.setState({
            number2: e.target.value
        })           
    }
    add2(){
        var a = parseFloat(this.state.number1) 
        var b = parseFloat(this.state.number2)
        var c = a+b
        this.setState({
            sum: c
        })           
    }
    render(){
        return(
            <Fragment>
                <div>
                    <input value = {this.state.number1} onChange = {this.inputchange_num1.bind(this)}/>
                    <span>+</span>
                    <input value = {this.state.number2} onChange = {this.inputchange_num2.bind(this)}/>
                    <span>=</span>
                    <input value = {this.state.sum}/>
                </div> 
                <div>
                    <button onClick={this.add2.bind(this)}>加法计算</button>
                </div>
            </Fragment>     
          
        )     
    }
}

export default Calculator
