import React,{Fragment} from 'react'
import {Button} from 'antd'
import './index.css'

class animation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            show: true
        };
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle() {
        this.setState((prevState) => {
            return {
                show: prevState.show === true ? false : true
            }
        })
    }
    render(){
        return(
            <Fragment>
                <div className={this.state.show ? 'show' : 'hide'}>hello</div>
                <Button onClick={this.handleToggle} style={{width: 100}}>{this.state.show ?'hide':'show'}</Button>
            </Fragment>
        )
    }
}

export default animation