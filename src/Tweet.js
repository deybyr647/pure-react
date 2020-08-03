import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import './Tweet.css';

let Avatar = ({url}) => {
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

const DeviceID = ({device}) => (
    <span className='deviceID'>{device}</span>
)

let Tweet = ({tweet}) => {
  return(
    <div className='tweet'>
     <Avatar url={tweet.gravatar}/>

      <div className='content'>
        <NameWithHandle author={tweet.author}/>
         <Time time={tweet.timestamp}/>
        <Message text={tweet.message}/>
        <div className='buttons'>
          <ReplyButton/>
          <RetweetButton count={tweet.retweets}/>
          <LikeButton count={tweet.likes}/>
          <MoreOptionsButton/>
          <DeviceID device={tweet.device}/>
        </div>
      </div>

    </div>
  );
}

let tweetsArr = [
    {
      message: 'Good morning, friends !',
      gravatar: 'https://cdn.auth0.com/blog/react-js/react.png',
      author: {
        handle: 'deybyr647',
        name: 'Deyby'
      },
      likes: 2,
      retweets: 3,
      timestamp:'2020-07-02 12:45:07',
      device: 'iPhone 8'
    },
    {
      message: 'Fuck it, Perc 3 million time',
      gravatar: 'https://i.ytimg.com/vi/5SbOeQp1EiI/maxresdefault.jpg',
      author: {
        handle: '7ven',
        name: 'Tax Fraud God'
      },
      likes:4000,
      retweets: 1500,
      timestamp: '2019-10-31 20:45:18',
      device: 'Louis Vuitton Microwave'
    },
    {
      message: 'You cannot say Pop & 4get the Smoke',
      gravatar: 'https://fntarizona.com/wp-content/uploads/2017/05/shutterstock_624472886.jpg',
      author: {
        handle: 'volumizing',
        name: 'Divad'
      },
      likes: 5000,
      retweets: 2000,
      timestamp: '2019-08-25 15:30:18',
      device: 'Samsung Smart Fridge'
    }

]

let Tweets = ({tweetsArr}) => (
    <div className='tweetsList'>
        {tweetsArr.map(tweetObj => (
            <Tweet tweet={tweetObj}/>
        ))}
    </div>
)

/*PropTypes*/

LikeButton.propTypes = {
  count: PropTypes.number
}

RetweetButton.propTypes = {
  count: PropTypes.number
}

Message.propTypes = {
  text: PropTypes.string.isRequired
}

Time.propTypes = {
  time: PropTypes.string.isRequired
}

NameWithHandle.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired
  }).isRequired
}

Avatar.propTypes = {
  hash: PropTypes.string.isRequired
}

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired
}

Tweets.propTypes = {
    tweetsArr: PropTypes.array.isRequired
}

class App extends React.Component{
  render(){
    return(
        <Tweets tweetsArr={tweetsArr}/>
    );
  }
}

export default App;
