import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Login from "./page/Login.js";
import Center from "./page/Center.js";
import Home from './page/Home.js'
import Tab from './page/tab/tab.js'

class App extends React.Component{
    render() {
        return(
          <Router>
              <div>
                  <Route exact path="/" component={Home} />
                  <Route path="/Login" component={Login} />
                  <Route path="/Center" component={Center} />
                  <Route path="/Tab" component={Tab} />
              </div>
          </Router>
        )
    }
}
export default App