import React, {Component} from 'react';
import './App.css';
import logo from "./logo.svg";
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import Index from './index/index.jsx'
import Manager from './manager/manager.jsx'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <img src={logo} alt=""/>
                    <Route exact path="/" component={Index}/>
                    <Route path="/manager" component={Manager}/>
                    <div className="tab-bar">
                        <NavLink exact to="/" activeClassName="tab-bar__active">
                            首页
                        </NavLink>
                        <NavLink to="/manager" activeClassName="tab-bar__active">
                            人员管理
                        </NavLink>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
