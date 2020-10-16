import React from 'react'
import LikeBtn from './LikeBtn'
import Retweetbtn from './RetweetBtn'


const TweetList = (props) => {
  return ( 
    <section id="tweets-container">    
      {props.tweets.map((tweet) => (
        <article key={tweet.id} className="tweet-container">
          <h3 className="tweet-container-item">
            {tweet.id} {'->'} 
            {tweet.is_retweet && tweet.retweet.content}
            {!tweet.is_retweet && tweet.content}
          </h3>
          <LikeBtn tweetId={tweet.id} tweetLikes={tweet.likes} isLiked={tweet.isLiked} />
          <Retweetbtn tweetId={tweet.id} />
        </article>
      ))}   
    </section>
  )
}


export default TweetList