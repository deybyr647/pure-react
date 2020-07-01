import React from 'react';
import logo from './logo.svg';
import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Hey/>
        <List/>
        <Submit name='Submit'/>
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

let Hello = (props) =>{
  return(
    <div>
      <span>Hello {props.name}!</span>
    </div>
  )
}

let World = () =>{
  return(
    <div>
      <span> World </span>
    </div>
  )
}

class Hey extends React.Component{
  render(){
    return [<Hello/>, <World/>, <Hello/>]
  }
}

class List extends React.Component{
  render(){
    return(
      <React.Fragment>
        <li> Hi there</li>
      </React.Fragment>
    )
  }
}

class Submit extends React.Component{
  render(){
    return(
      <button>{newFunc(10, 5)}</button>
    )
  }
}

function myFunc(a, b){
  let y;
  if(a > b){
    y = `${a} is greater than ${b}`
  } 
  else{
    y = `${b} is greater than ${a}`
  }

  return y;
}

let newFunc = (a,b) =>{
  let z;

  (a > b) ? (z = `${a} > ${b}`) : (z = `${b} > ${a}`)

  return z;
}

//Comment

/* Comment */

{/*Comment*/}

class Comp1 extends React.Component{
  render(){
    return(
      <div className = 'book'>
        <div className = 'title'>
          The Title
        </div>
        <div className = 'author'>
          The Author
        </div>
        <ul className='stats'>
          <li className = 'rating'>
            5 stars
          </li>
          <li className = 'isbn'>
            12-345678-910
          </li>
        </ul>
      </div>
    )
  }
}

let Comp2 = () =>{
  return(
    React.createElement('div', {className: 'book'},
    React.createElement('div', {className: 'title'}, 'The Title'),
    React.createElement('div', {className: 'author'}, 'The Author'),
    React.createElement('ul', {className: 'stats'},
    React.createElement('li', {className: 'rating'}, '5 stars'), 
    React.createElement('li', {className: 'isbn'}, '12-345678-910')))
  )
}

let Greeting = () =>{
  let username = false;

  let out;

  (typeof(username) == 'string') ? (out = `Hello, ${username}`) : (out = 'Not Logged In')

  return (<p>{out}</p>)
}

let App = () =>{
  return([<Comp1/>, <Comp2/>, <Greeting/>])
}
export default App;
