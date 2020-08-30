import React from 'react';
import './App.css';

let Child = ({onAction, children}) => (
  <button onClick={onAction}>
    {children}
  </button>
)

class CountingParent extends React.Component{
  state = {
    actionCount: 0
  }

  increaseCount = (action) => {
    console.log('Child says:', action);

    this.setState({
      actionCount: this.state.actionCount + 1
    });

  }

  resetCount = (action) => {
    console.log('Child says:', action);

    this.setState({
      actionCount: 0
    })
  }

  decreaseCount = (action) => {
    console.log('Child says:', action);

    this.setState({
      actionCount: this.state.actionCount - 1
    });
  }

  render(){
    return(
      <div>
        <Child onAction={this.increaseCount}>Increase Counter</Child>
        <Child onAction={this.resetCount}>Reset Counter</Child>
        <Child onAction={this.decreaseCount}>Decrease Counter</Child>
        <p>Clicked {this.state.actionCount} times </p>
      </div>
    );
  }
}

class App extends React.Component{
  render(){
    return(
      <>
      <CountingParent/>
      <CountingParent/>
      </>
    )
  }
}

export default App;
