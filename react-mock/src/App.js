import React,{Component} from 'react';
import logo from './logo.svg';
import {Divider,BackTop} from 'antd'
import './App.css';
import axios from "axios";
import "./mock.js"
import Table from './pages/table/table'
import FragMent from './pages/fragment/fragment'
// import CanvasList from './components/canvas'
import Tab from './pages/tab/tab'
import Carousel from './pages/Carousel/index'
import Comment from './pages/Comment/index'
import AddList from './pages/addList/index'
import Frame from './pages/frame/index'
import Calander from './pages/Calendar/index'
import NumberInput from './pages/numberInput/index'
import Drag from './pages/drag/index'
import Animation from './pages/Animation/index'
import TableList from './pages/tableList/index'
import Footer from './components/footer'

import {Provider} from 'react-redux'
import store from './store';

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
}

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      userinfo: [],
      message:"Ant Design ©2018 Created by Ant UED"
    }
  } 
  componentDidMount(){
    //这列的'/mock'与mock.js文件里的地址一致
    axios.get('/mock', {dataType:'json'}).then(res=>{
      this.setState({
        userinfo: res.data.userinfo
      })
    })
  }
  render(){
    return (
      <Provider store={store}>
        <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <BackTop>
          <div style={style}>UP</div>
        </BackTop>
        {/* <header className="App-header">
          
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Divider>mock模拟数据实现表格</Divider>
        <Table data={this.state.userinfo}/>
        <Divider>父子传值和方法</Divider>
        <FragMent/>
        <Divider>tab切换</Divider>
        {/* <CanvasList/> */}
        <Tab/>
        <Divider>走马灯</Divider>
        <Carousel/>
        <Divider>发表评论</Divider>
        <Comment/>
        <Divider>新增项目</Divider>
        <AddList/>
        <Divider>骨架屏</Divider>
        <Frame/>
        <Divider>日历</Divider>
        <Calander/>
        <Divider>数字输入框</Divider>
        <NumberInput/>
        <Divider>九宫格拖拽</Divider>
        <Drag/>
        <Divider>C3动画</Divider>
        <Animation/>
        <Divider>表头分组</Divider>
        <TableList/>
        <Footer  txt={this.state.message}/>
      </div>
      </Provider>
    );
  }
}
