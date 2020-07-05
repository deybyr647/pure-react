import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import './Tweet.css';

let Avatar = ({hash}) => {
  let url = `https://www.gravatar.com/avatar/${hash}`
  return(
    <img src={url} 
    className='avatar' alt='avatar'/>
  );
}

let Message = ({text}) => {
  return(
    <div className='message'> {text} </div>
  );
}

let NameWithHandle = ({author}) => {
  const {name, handle} = author;
  return(
    <span className='author'>
      <span className='name'>{name}</span>
      <span className='handle'>@{handle}</span>
    </span>
  );
}

const Time = ({time}) => {
  const timeString = moment(time).fromNow();
  
  return(
    <span className='time'>{timeString}</span>

  )
}

const ReplyButton = () => (
  <i className='fa fa-reply reply-button'/>
);

const RetweetButton = ({count}) => (
  <span className='retweet-button'>
  <i className='fa fa-retweet retweet-button'/>
  {getRetweetCount(count)}
  </span>
);

let getRetweetCount = (count) => {
  if(count > 0){
    return(
      <span className='retweet-count'>
        {count}
      </span>
    );
  } else{
    return null;
  }
}

const LikeButton = ({count}) => (
  <span className='like-button'>
    <i className='fa fa-heart like-button'/>
    {count > 0 && 
    <span className='like-count'>
      {count}
    </span>}
  </span>
);

const MoreOptionsButton = () => (
  <i className='fa fa-ellipsis-h more-options-button'/>
)

let Tweet = ({tweet}) => {
  return(
    <div className='tweet'>
     <Avatar hash={tweet.gravatar}/>

      <div className='content'>
        <NameWithHandle author={tweet.author}/> 
         <Time time={tweet.timestamp}/>
        <Message text={tweet.message}/>
        <div className='buttons'>
          <ReplyButton/>
          <RetweetButton count={tweet.retweets}/>
          <LikeButton count={tweet.likes}/>
          <MoreOptionsButton/>
        </div>  
      </div>

    </div>
  );
}

let Tweet1 = {
  message: 'Good morning, friends !',
  gravatar: 'xyz',
  author: {
    handle: 'deybyr647',
    name: 'Deyby'
  },
  likes: 2,
  retweets: 3,
  timestamp:'2020-07-02 12:45:07'
}

let Tweet2 = {
  message: 'You cannot say Pop & 4get the Smoke',
  gravatar: 'xyz',
  author: {
    handle: 'volumizing',
    name: 'Divad'
  },
  likes: 5000,
  retweets: 2000,
  timestamp: '2019-08-25 15:30:18'
}

let Tweet3 = {
  message: 'Fuck it, Perc 3 million time',
  gravatar: 'xyz',
  author: {
    handle: '7ven',
    name: 'Tax Fraud God'
  },
  likes:4000,
  retweets: 1500,
  timestamp: '2019-10-31 20:45:18'
}

let Comment =({comment}) =>{
  return(
    <div>
      <div className='author'>{comment.author.handle}</div>
      <div className='message'>{comment.message}</div>
      <div className='likes'>
        {comment.likes > 0 ? comment.likes : 'No'} likes
      </div>
    </div>  
  )
}

Comment.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  likes: PropTypes.number
}

let commentOne = {
  author: {
    handle: 'bryang229',
    name: 'Bryan'
  },
  message: 'Bruh Moment',
  likes: 100,
  retweets: 15,
  timestamp: '2020-04-20 17:35:13'

}

class App extends React.Component{
  render(){
    return(
      <>
        <Tweet tweet={Tweet2}/> 
        <br/>
        <Tweet tweet={Tweet1}/>
        <br/>
        <Tweet tweet={Tweet3}/>
        <br/>
        {/*<Comment author='random' likes={9 ** 2} message="You're Gay"/>*/}
        <Comment comment={commentOne} />
      </>  
    );
  }
}

export default App;
