import React, {useState, useEffect} from 'react'
import './Tweets.css'
import TweetCreate from './TweetCreate'
import TweetList from './TweetList'


const Tweets = () => {
  const [tweets, setTweets] = useState([])
  const [error, setError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isTweetAdded, setIsTweetAdded] = useState(false)

  useEffect(() => {
    const url = 'http://127.0.0.1:8000/api/tweets/'
    const request = {
      method: 'get',
      headers: {
        'X-Requested-With': 'XMLHttpRequest', 
        'Content-Type': "application/json", 
        'Accept': "application/json"
      }
    }

    fetch(url, request)
      .then((response) => {
        if(response.status === 200) {
          return response.json()
        }
      })
      .then(
        (data) => {
          setIsLoaded(true)
          setTweets(data)
        },
        (error) => {
          setIsLoaded(true)
          setError(true)
        }
      )
    }, [])
    
    const onFormPost = () => {
      !isTweetAdded? setIsTweetAdded(true): setIsTweetAdded(false)
    }
    
  return (
    <React.Fragment>
      <TweetCreate onFormPost={onFormPost} />
      {!isLoaded && <h1 className="message">Loading</h1>}
      {error && <h1 className="message">Error</h1>}
      {!error && <TweetList tweets={tweets} />}
    </React.Fragment>
    
  )
}


export default Tweets