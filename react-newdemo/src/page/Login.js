import React from 'react';
import { Link } from 'react-router-dom';
import Register from './register'
class Login extends React.Component {
    render(){
        return(
            <div>
                <input type="text" placeholder='请输入用户名'/>
                <input type="password" placeholder='请输入密码'/>
                <button>登录</button><button>注册</button>
                <span>忘记密码</span>
                <Register/>
                <Link to="/">
                    <div>返回首页</div>
                </Link>
            </div>
        )
    }
}
export default Login;