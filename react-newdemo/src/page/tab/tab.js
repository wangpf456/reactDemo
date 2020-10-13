import React from 'react';
import './tab.css'

class Tab extends React.Component{
    constructor(){
        super()//从原型上继承对应的方法和属性,this必须写在super下面
        // //构造函数初始化数据，将需要改变的数据初始化到state中
        this.state={
            flag: true
        }
        this.clickEvent =  this.clickEvent.bind(this)
    }
    clickEvent(e){
        console.log('clickEvent')
        console.log(e.target.dataset.index)
        let index = e.target.dataset.index
        if(index === '1'){
            this.setState({
                flag: true
            })
        }else{
            this.setState({
                flag: false
            })
        }
    }
    render(){
        return (
            <div>
                <button data-index="1" className={this.state.flag ? 'active' : 'content'} onClick={this.clickEvent}>内容一</button>
                <button data-index="2" className={!this.state.flag ? 'active' : 'content'} onClick={this.clickEvent}>内容二</button>
                <div>
                    <h1>{this.state.flag ? '内容一' : '内容二'}</h1>
                </div>
            </div>
        )
    }
}
export default Tab;