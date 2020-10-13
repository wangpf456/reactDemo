
import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class App extends Component {
 
  componentDidMount() {
    console.log('this.props====',this.props.tiger)
  } 
  render() {
    const { PayIncrease, PayDecrease } = this.props;
    return (
      <div className="App">
        <h2>{this.props.tiger}</h2>
        <button onClick={PayIncrease}>+</button>
        <button onClick={PayDecrease}>-</button>
      </div>
    );
  }
}
//需要渲染什么数据
function mapStateToProps(state) {
  return {
    tiger: state
  }
}
//需要触发什么行为
function mapDispatchToProps(dispatch) {
  return {
    PayIncrease: () => dispatch({ type: '加' }),
    PayDecrease: () => dispatch({ type: '减' })
  }
}
 
export default App = connect(mapStateToProps, mapDispatchToProps)(App)