import React from 'react'
import { Row, Col} from 'antd'
import './index.css'

class Home extends React.Component{
    state = {
        imgArr: [
            {
                url:require('../../img/1.jpg'),
                title: '接口句话'
            },{
                url:require('../../img/2.jpg'),
                title: '十里长街'
            },{
                url:require('../../img/3.jpg'),
                title: '石膏板软'
            }
        ]
    }
    render(){
        const {imgArr} = this.state
        return (
            <div>
                <Row gutter={24}>
                    {imgArr.map((item,index) => <Col xs={{ span: 5, offset: 1 }} md={{span: 7,offset: 1}} lg={{ span: 6, offset: 2 }} key={index}>
                        <div className='imgContent'>
                            <img src={item.url} alt=""/>
                            <span>{item.title}</span>
                        </div>
                    </Col>)}
                </Row>
            </div>
        )
    }
}
export default Home