import React from 'react'
import {Link} from 'react-router-dom'
import LikeBtn from './LikeBtn'
import Retweetbtn from './RetweetBtn'


const TweetList = (props) => {
  return ( 
    <section id="tweets-container">    
      {props.tweets.map((tweet) => (
        <article key={tweet.id} className="tweet-container">
          <Link to={`/profile/${tweet.user.username}`}><h2 className="tweet-container-item">{tweet.user.username}</h2></Link>
          <h4 className="tweet-container-item">
            {tweet.id} {'->'} 
            {tweet.is_retweet && tweet.retweet.content}
            {!tweet.is_retweet && tweet.content}
          </h4>
          <LikeBtn tweetId={tweet.id} tweetLikes={tweet.likes} isLiked={tweet.isLiked} />
          <Retweetbtn tweetId={tweet.id} />
        </article>
      ))}   
    </section>
  )
}


export default TweetList