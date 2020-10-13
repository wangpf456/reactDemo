import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Login from "./pages/Login/login.js";
import Home from './pages/Home/home.js'
import './App.css';

class App extends React.Component{
  render() {
      return(
        <Router>
            <div>
                <Route exact path="/" component={Login} />
                <Route path="/Home" component={Home} />
            </div>
        </Router>
      )
  }
}
export default App
