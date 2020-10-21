import React from 'react'
import {Link} from 'react-router-dom'
import LikeBtn from './LikeBtn'
import Retweetbtn from './RetweetBtn'


const TweetList = (props) => {
  return ( 
    <section id="tweets-container">    
      {props.tweets.map((tweet) => (
        <article key={tweet.id} className="tweet-container">
          <Link to={`/profile/${tweet.user.username}`}><h3 className="tweet-container-item">{tweet.user.username}</h3></Link>
          <p className="tweet-container-item">
            {tweet.is_retweet && tweet.retweet.content}
            {!tweet.is_retweet && tweet.content}
          </p>
          <LikeBtn tweetId={tweet.id} tweetLikes={tweet.likes} isLiked={tweet.isLiked} />
          <Retweetbtn tweetId={tweet.id} />
        </article>
      ))}   
    </section>
  )
}


export default TweetList