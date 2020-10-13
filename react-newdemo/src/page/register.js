import React from 'react'
import { message } from "antd";//引入antd相应模块
import "antd/dist/antd.css";//引入样式
import { TabletOutlined, MailOutlined } from '@ant-design/icons';

import './Register.css'
export default class Register extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)

    this.state = {
      noGetMessageDisplay: 'none',
      phone: this.props.phone || '',
      mobile_code: this.props.mobile_code || '',
      count: 60,
      liked: true
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  noGetMessage = e => {
    this.getAudioRequest()
  }

  // 获取语音验证码
  getAudioRequest() {
    if(this.state.phone === '') {
        message.warn("请先输入手机号")
      return
    } else if(!(/^1[34578]\d{9}$/.test(this.state.phone))) {
        message.warn("手机号格式不正确")
      return
    } else {
        message.warn("处理语音验证码ajax api.......")
    }
  }

  //获取短信验证码
  handleClick = () => {
    if (!this.state.liked) {
      return
    }

    if(this.state.phone === '') {
        message.warn("请先输入手机号")
      return
    } else if(!(/^1[34578]\d{9}$/.test(this.state.phone))) {
        message.warn("手机号格式不正确")
      return
    } else {
      console.log("点击获取验证码")
      this.setState({
        noGetMessageDisplay: 'block'
      })

      console.log(this.state.liked)
      let count = this.state.count
      console.log(count)
      const timer = setInterval(() => {
        this.setState({ count: (count--), liked: false }, () => {
          if (count === 0) {
            clearInterval(timer);
            this.setState({
              liked: true ,
              count: 60
            })
          }
        });
      }, 1000);
    }
  } 

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    }, () => {
      // console.log(this.state)
    })
  }

  render() {
    return (
        <div className="user_register">
          <div className="register_box" style={{ display: this.state.isRegLoginContainer }}>
            <div className="login_content" style={{ display: this.state.isLoginContainer }}>
              <div className="phone_number">
                <p><TabletOutlined/>手机号</p>
                <input type="tel" placeholder="请输入手机号" maxLength="11" name="phone" value={this.state.phone} onChange={this.handleInputChange} />
              </div>
              <div className="vscode_message">
                <div className="vscode_title">
                    <p><MailOutlined/>验证码</p>
                    <span onClick={this.noGetMessage} style={{ display: this.state.noGetMessageDisplay }}>没收到验证码?</span>
                </div>
                <div className="get_receive_vscode">
                    <p onClick={this.handleClick}>
                        {
                        this.state.liked ? 
                        <span>获取验证码</span>
                        : 
                        <span className="count_second">{this.state.count + 's'}</span> 
                        }
                    </p>
                    <input type="tel" placeholder="请输入验证码" maxLength="4" name="mobile_code" value={this.state.mobile_code} onChange={this.handleInputChange} />
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}