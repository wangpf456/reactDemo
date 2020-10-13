import React, {Component} from 'react';
import './App.css';
import logo from "./logo.svg";
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import Index from './index/index.jsx'
import Calculator from './calculator/calculator.jsx'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <img src={logo} alt=""/>
                    <Route exact path="/" component={Index}/>
                    <Route path="/calculator" component={Calculator}/>
                    <div className="tab-bar">
                        <NavLink exact to="/" activeClassName="tab-bar__active">
                            首页
                        </NavLink>
                        <NavLink to="/calculator" activeClassName="tab-bar__active">
                            计算器
                        </NavLink>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
