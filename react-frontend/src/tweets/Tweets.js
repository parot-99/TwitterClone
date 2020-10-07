import React, {useState, useEffect} from 'react'
import './tweets.css'
import TweetCreate from './TweetCreate'
import TweetList from './TweetList'


const Tweets = () => {
  const url = 'http://127.0.0.1:8000/api/tweets/'
  const request = {
    method: 'get',
    headers: {
      'X-Requested-With': 'XMLHttpRequest', 
      'Content-Type': "application/json", 
      'Accept': "application/json"
    }
  }

  const [tweets, setTweets] = useState([])
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
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

  return (
    <React.Fragment>
      <TweetCreate />
      {!isLoaded && <h1>Loading</h1>}
      {error && <h1>Error</h1>}
      {!error && <TweetList tweets={tweets} />}
    </React.Fragment>
    
  )
}


export default Tweets