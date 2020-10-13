import React,{Component, Fragment} from 'react'
import { Skeleton } from 'antd';

export default class Frame extends Component{
    state = {

    }
    render(){
        return(
            <Fragment>
                <Skeleton avatar paragraph={{rows: 4}}/>
            </Fragment>
        )
    }
}