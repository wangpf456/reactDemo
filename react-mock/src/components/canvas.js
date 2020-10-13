import React from 'react';

class CanvasDemo extends React.Component {
    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect(0,0, 100, 100);
        //①定义样式
        ctx.strokeStyle='green';        //颜色
        ctx.lineWidth=20;               //线宽
        ctx.lineCap='square';           //端点
        ctx.lineJoin='round';           //拐点
        //②定义路径
        ctx.moveTo(200,10);      //起点
        ctx.lineTo(200,200);     //拐点
        ctx.lineTo(100,200);     //拐点
        ctx.lineTo(100,200);     //终点
        ctx.closePath();         //闭合
        //③绘制
        ctx.stroke();
    }
    render() {
        return (
            <canvas ref="canvas" width={300} height={300}/>
        );
    }
}

export default CanvasDemo