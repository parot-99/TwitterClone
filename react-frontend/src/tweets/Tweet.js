import React from 'react'
import {Link} from 'react-router-dom'
import LikeBtn from './LikeBtn'
import Retweetbtn from './RetweetBtn'
import Retweet from './Retweet'


const Tweet = (props) => {
  return ( 
    <article key={props.tweet.id} className="tweet-container">
      <header className="tweet-header">
        <div id="tweet-profile-pic">
          <img src={`${props.tweet.profile_pic}`} alt=""/>
        </div>
        <Link to={`/profiles/${props.tweet.username}`}><h3 className="tweet-container-item">{props.tweet.username}</h3></Link>
      </header>
      <p className="tweet-container-item">
        {props.tweet.content}
      </p>
      {props.tweet.is_retweet && <Retweet tweet={props.tweet.retweet} />}
      <LikeBtn tweetId={props.tweet.id} tweetLikes={props.tweet.likes} isLiked={props.tweet.isLiked} />
      <Retweetbtn tweet={props.tweet} onTweetAdd={props.onTweetAdd} />
      
    </article>
  )
}


export default Tweet