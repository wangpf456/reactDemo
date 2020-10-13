import React from 'react'
import { Steps, Button, message } from 'antd';

const { Step } = Steps;
const steps = [
    {
      title: '审核受理中',
      content: 'First-content',
    },
    {
      title: '审核进行中',
      content: 'Second-content',
    },
    {
      title: '审核完成',
      content: 'Last-content',
    },
];
  

export default class ReviewManage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          current: 0,
        };
      }
    
      next() {
        const current = this.state.current + 1;
        this.setState({ current });
      }
    
      prev() {
        const current = this.state.current - 1;
        this.setState({ current });
      }
    
      render() {
        const { current } = this.state;
        return (
          <div>
            <Steps current={current}>
              {steps.map(item => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            <div className="steps-action">
              {current < steps.length - 1 && (
                <Button type="primary" onClick={() => this.next()}>
                    下一步
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button type="primary" onClick={() => message.success('审核完成!')}>
                    完成
                </Button>
              )}
              {current > 0 && (
                <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
                    上一步
                </Button>
              )}
            </div>
          </div>
        );
    }
}