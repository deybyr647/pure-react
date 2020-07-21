import React from 'react';
//import PropTypes from 'prop-types';
import './App.css';

let ErrorBox = ({children}) => {
  return(
    <div className='errorbox'>
      <i className='fa fa-exclamation-circle'>
      </i>
      <span> {children}</span>
    </div>
  );
}

let Nav = ({children}) => {
  let items = React.Children.toArray(children);

  for(let i = items.length - 1; i >= 1; i--){
    items.splice(i, 0, 
      <span key={i} className='separator'> | </span>);
  }

  items.forEach(item => {
    if(item.type === (<NavItem/>).type){
      console.warn(`Passed!`);
    } else{
      console.error(`Child is not a NavItem!`);
      return(<ErrorBox/>)
    }
  })

  return(
    <div>{items}</div>
  );

}

let NavItem = ({url = '/', children}) => {
  return(
    <a href={url}>{children}</a>
  )
}

let Title = ({children}) => {
  return(
    <p className = 'title'>{children}</p>
  );
}

let Body = ({children}) =>{
  return(
    <p className = 'body'>{children}</p>
  );
}

let Footer = ({children}) => {
  return(
    <button className='buttonClass'>{children}</button>
  );
}

let Dialog = ({children}) => {
  let items = React.Children.toArray(children);

  items.forEach(child => {
    if(child.type === (<Title/>).type ||
    child.type === (<Body/>).type ||
    child.type === (<Footer/>).type){
      console.log(`Passed!!!`);
    } else{
      console.error(`Didn't pass :(`);
    }
  });

  return(
    <div className = 'dialog'>{items}</div>
  );
}

class App extends React.Component{
  render(){
    return (
      <>
      <ErrorBox>Something has gone wrong</ErrorBox>
      <br/>

      <Nav>
        <NavItem url='/'>Home</NavItem>
        <NavItem url='/about'>About</NavItem>
        <NavItem url='/contact'>Contact</NavItem>
      </Nav>

      <Dialog>
        <Title>Important Message</Title>
        <Body>This is important!</Body>
        <Footer>Okay!</Footer>
      </Dialog>

      </>
    );
  }
}

export default App;
