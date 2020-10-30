import React from 'react'
import {Link} from 'react-router-dom'


const Retweet = (props) => {
  return ( 
    <article key={props.tweet.id} className="retweet-container">
      <header className="tweet-header">
        <div id="tweet-profile-pic">
          <img src={`${props.tweet.profile_pic}`} alt=""/>
        </div>
        <Link to={`/profiles/${props.tweet.username}`}><h3 className="tweet-container-item">{props.tweet.username}</h3></Link>
      </header>
      <p className="tweet-container-item">
        {props.tweet.content}
      </p>
    </article>
  )
}


export default Retweet