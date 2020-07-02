import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. <br/>
          <Hey name='Deyby'/> <br/>
          <Hello name='Bryan'/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


function Hey(props){
  return(<span>Hello, {props.name}</span>)
}

let Hello = ({name}) => {
  return(
    <h4> Hi, {name}</h4>
  )
}
export default App;
