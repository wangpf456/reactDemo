import React from 'react';
import { Link } from 'react-router-dom';
import { Slider } from 'antd';
class Home extends React.Component {
    state = {
        mask: {
            0: '0',
            10: '10',
            20: '20',
            30: '30',
            40: '40',
            50: '50',
            60: '60',
            70: '70',
            80: '80',
            90: '90',
            100: '100'
        },
        active_id:0,
        data: []
    };
    handleChange = value => {
        console.log(value)
    }
    clickAction(id){
        this.setState(()=>({active_id:id-1}))
    }
    render(){
        const { mask } = this.state;
        return(
            <div>
                <div>Home</div>
                <div>
                    <Link to="/Login">
                        <div>登录</div>
                    </Link>
                    <Link to="/Center" >
                        <div>个人中心</div>
                    </Link>
                    <Link to="/Tab" >
                        <div>tab切换</div>
                    </Link>
                </div>
                <div>
                    <Slider defaultValue={30} style={{width: 300}} marks={mask} onChange={this.handleChange.bind(this)}/>
                </div>
            </div>
        )
    }
}
export default Home;
