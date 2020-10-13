import React from "react";
//生成action的对象的方法叫actionCreator
import actions from "../store/actions/counters";
import {connect} from "react-redux";
class Counter extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
             <div>{this.props.number}</div>
                <button onClick={()=>{
                    this.props.add(1)
                }}>+++</button>
                <button onClick={()=>{
                    this.props.minus(1)
                }}>---</button>
            </div>
            )
    }
}
let mapStateToProps = (state)=>{ //state代表的store.getState()
    return {...state}
};

export default connect(mapStateToProps,actions)(Counter)