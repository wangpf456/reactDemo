import React from 'react'
import { Carousel } from 'antd';

import './index.css'

class carousel extends React.Component{
    state = {
        imgArr:[
            {
                url: require('../../img/1.jpg')
            },
            {
                url: require('../../img/2.jpg')
            },
            {
                url: require('../../img/3.jpg')
            },
            {
                url: require('../../img/4.jpg')
            }
        ]
    }
    render(){
        const {imgArr} = this.state
        return(
            <Carousel autoplay>
                {imgArr.map((imgItem, imgIndex) => {
                    return (
                        <div
                        className="imgs-carousel-box"
                        key={imgIndex}>
                            <img src={imgItem.url} alt='图片'/>
                        </div>
                    );
                })}
            </Carousel>
        )
    }
}

export default carousel