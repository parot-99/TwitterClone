import React from 'react'
import {Link} from 'react-router-dom'

const RetweetBtn = (props) => {
  return (
    <Link to={{
      pathname: '/home/retweet',
      state: {
        tweet: props.tweet
      }
    }}>
      <button className="prim-btn tweet-container-item cursor">
        retweet
      </button>
    </Link>
  )
}


export default RetweetBtn