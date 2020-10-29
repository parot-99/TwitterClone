import React, {useState, useEffect} from 'react'
import './Tweets.css'
import TweetCreate from './TweetCreate'
import Tweet from './Tweet'



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
        Authorization: `Token  ${localStorage.getItem('accessToken')}`, 
        'Accept': 'application/json'
      }
    }

    fetch(url, request)
      .then((response) => {
        if(response.status === 200) {
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
    </main> 
  )
}


export default Tweets