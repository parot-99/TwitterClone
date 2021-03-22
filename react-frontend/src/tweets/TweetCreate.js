import React, {useState, useContext, useEffect, useRef} from 'react'
import AuthContext from './../utilities/AuthContext'


const TweetCreate = (props) => {
  const {CSRF} = useContext(AuthContext)
  const [content, setContent] = useState('')
  const tweetBtn = useRef(null)
  const tweetCounter = useRef(null)
 
  useEffect(() => {
    if (content.length > 240) {
      tweetBtn.current.disabled = true
      tweetCounter.current.style.color = 'red'
    }

    else {
      tweetBtn.current.disabled = false
      tweetCounter.current.style.color = 'inherit'
    }
  }, [content])
 
  const handleContent = (event) => {
    setContent(event.target.value)
  }

  const handleTweet = (event) => {
    event.preventDefault()
  
    const data = {
      content: content
    }
   
    const url = '/api/tweets/create/'
    const request = {
      method: 'POST',
      headers: {  
        'Content-Type': 'application/json', 
        'Accept': 'application/json',
        'X-CSRFToken': CSRF
      },
      credentials: 'same-origin',
      body: JSON.stringify(data)
    }

    fetch(url, request)
      .then(response => {   
        if (response.status === 201) {
          setContent('')
          props.onTweetAdd()
        }

        if (response.status === 400) {
         
        }   
      })
      .catch((error) => {
        console.log(error)
      })
  }
 
  return (
    <form onSubmit={(e) => handleTweet(e)} method="POST" id="tweet-create-form" className="form-container">
      <div className="form-item">
        <textarea 
          name="content" 
          id="id_content" 
          cols="60" 
          rows="10" 
          placeholder="Your tweet..." 
          required={true} 
          value={content} 
          onChange={(e) => handleContent(e)}
          autoComplete="off">
        </textarea>
      </div>
      <div className="form-item">
        <h6 ref={tweetCounter}>{content.length} / 240</h6>
      </div>
      <div className="form-item">
        <button ref={tweetBtn} type="submit" className="prim-btn cursor">
          Tweet
        </button>
      </div>
    </form>
  )
}


export default TweetCreate