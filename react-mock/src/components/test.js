import React, { Component } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import './test.css'
class Test extends Component {
    state = {  }
    render() {
        return (
            <li className='list'>
                <span>{this.props.content}</span>
                <DeleteOutlined onClick={this.clickChild}/>
            </li>
        );
    }
    clickChild=()=>{
        this.props.deleteMethod(this.props.index)
    }
}

export default Test;