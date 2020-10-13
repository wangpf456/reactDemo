import React, {Component} from 'react';
import './manager.css'

export default class Manager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ["Janlay"],
            isShowNew: true
        };
    }
    componentDidMount(){
        window.localStorage.setItem("myList",JSON.stringify(this.state.list))
    }
    showAddInput() {
        this.setState({
            isShowNew: false
        })
    }

    inputChange = (event) => {
        this.setState(
            {
                input: event.target.value
            }
        )
    };

    add() {
        if(this.state.input == '' || this.state.input == undefined){
            return false
        } else {
            let list = this.state.list;
            list.push(this.state.input);
            this.setState({
                list: list,
                input: ''
            },() => {
                window.localStorage.setItem("myList",JSON.stringify(this.state.list))
            })
        }
    }

    delete(deleteIndex) {
        Array.prototype.delete = function (deleteIndex = 0) {
            let temArray = [];
            for (let i = 0; i < this.length; i++) {
                if (i !== deleteIndex) {
                    temArray.push(this[i]);
                }
            }
            return temArray;
        };
        let list = this.state.list.delete(deleteIndex);
        this.setState({
            list: list
        },() => {
            window.localStorage.setItem("myList",JSON.stringify(this.state.list))
        })
    }
    UpdateClick(updateIndex){
        var arr =  this.state.list;
        //同过prompt获取要修改的内容
        var str = prompt("请输入修改内容");
        //判断是不是确认修改
        if(str!=null){
            //在arr数组中找到下标index,设置修改个数为1，修改的内容为str
            arr.splice(updateIndex,1,str);
            //修改过后把this.state的myList数据修改成给改过的数据
            this.setState({
                list:arr
            },()=>{
                //修改本地数据
                window.localStorage.setItem("myList",JSON.stringify(this.state.list))
            })
        }
    }
    render() {
        let isShowNew, list = [];
        if (this.state.isShowNew) {
            isShowNew =
                <a className="manager__add" onClick={() => this.showAddInput()}>
                    <span>新增</span>
                </a>
        } else {
            isShowNew =
                <div className="manager__input">
                    <input type="text" value={this.state.input} onChange={this.inputChange}/>
                    <a onClick={() => this.add()}>添加</a>
                </div>
        }
        if (this.state.list.length > 0) {
            this.state.list.map((data, index) => {
                list.push(
                    <div className="manager__tab__list__item" key={index}>
                        <span className="manager__tab__list__item__name">
                            {data}
                        </span>
                        <span className="manager__tab__list__item__tools">
                            <button className="item__tools__delete" onClick={() => this.delete(index)}>删除</button>
                            <button className="item__tools__delete" onClick={() => this.UpdateClick(index)}>修改</button>
                        </span>
                    </div>
                )
            });
        } else {
            list =
                <span>暂无数据</span>
        }
        return (
            <div className="manager">
                {isShowNew}
                <div className="manager__tab">
                    <div className="manager__tab__header">
                        <span>姓名</span>
                        <span>操作</span>
                    </div>
                    <div className="manager__tab__list">
                        {list}
                    </div>
                </div>
            </div>
        )
    }
}
