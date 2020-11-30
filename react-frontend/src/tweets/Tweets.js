import React, {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import './Tweets.css'
import TweetCreate from './TweetCreate'
import Tweet from './Tweet'
import RetweetCreate from './RetweetCreate'
import {PageNotFound} from './../handlers'


const Tweets = () => {
  const [tweets, setTweets] = useState([])
  const [error, setError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isTweetAdded, setIsTweetAdded] = useState(false)
 
  useEffect(() => {
    const url = '/api/tweets/'
    const request = {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      },
      credentials: 'same-origin'
    }

    fetch(url, request)
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        }

        else {
          throw new Error(response.statusText)
        }    
      })
      .then(data => {
        setIsLoaded(true)
        setTweets(data)
      })
      .catch(error => {
        setIsLoaded(true)
        setError(true)
        console.log(error);
      })
    }, [isTweetAdded])
    
    const onTweetAdd = () => {
      setIsTweetAdded(!isTweetAdded)
    }
    
  return ( 
    <main id="page-container">
      <Switch>
        <Route exact path='/home'>
          <TweetCreate onTweetAdd={onTweetAdd} />
          {!isLoaded && <div className="loader"></div>}
          {error && <h1 className="message">Error</h1>}
          {!error && 
            <section id="tweets-container">    
              {tweets.map((tweet) => (
                <Tweet key={tweet.id} tweet={tweet} onTweetAdd={onTweetAdd} />
                ))}
            </section>
          }
        </Route>
        <Route exact path='/home/retweet'>
          <RetweetCreate onTweetAdd={onTweetAdd} />
        </Route>
        <Route>
          <PageNotFound name="home" to="/home" />
        </Route>
      </Switch>
    </main> 
  )
}


export default Tweets