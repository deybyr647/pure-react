import React from 'react';
import './Tweet.css';

let Avatar = () => {
  return(
    <img src='https://www.gravatar.com/avatar/nothing' 
    className='avatar' alt='avatar'/>
  );
}

let Message = () => {
  return(
    <div className='message'> Hey Y'all, it's Deyby</div>
  );
}

let Author = () => {
  return(
    <span className='author'>
      <span className='name'> Deyby </span>
      <span className='handle'>@deybyr647</span>
    </span>
  );
}

const Time = () => (
  <span className='time'>3h ago</span>
);

const ReplyButton = () => (
  <i className='fa fa-reply reply-button'/>
);

const RetweetButton = () => (
  <i className='fa fa-retweet retweet-button'/>
);

const LikeButton = () => (
  <i className='fa fa-heart like-button'/>
);

const MoreOptionsButton = () => (
  <i className='fa fa-ellipsis-h more-options-button'/>
)

let Tweet = () => {
  return(
    <div className='tweet'>
     <Avatar/>

      <div className='content'>
        <Author/> <Time/>
        <Message/>
        <div className='buttons'>
          <ReplyButton/>
          <RetweetButton/>
          <LikeButton/>
          <MoreOptionsButton/>
        </div>  
      </div>

    </div>
  );
}

class App extends React.Component{
  render(){
    return(
      <>
        <Tweet />
      </>  
    );
  }
}

export default App;
