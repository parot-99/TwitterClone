import React, {useState} from 'react'
import Message from './../messages/Message'


const TweetCreate = (props) => {
  const [content, setContent] = useState('')
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

  const handleTweet = (event) => {
    event.preventDefault()
   
    const data = {
      content: content
    }
   
    const url = 'http://127.0.0.1:8000/api/tweets/create/'
    const request = {
      method: 'POST',
      headers: {  
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('accessToken')}` 
      },
      body: JSON.stringify(data)
    }

    fetch(url, request)
      .then(response => {   
        if(response.status === 201) {
          props.onTweetAdd()
          return response.json()
        }

        if(response.status === 400) {
          throw new Error('Try a shorter tweet')
        }

        if(response.status === 401) {
          throw new Error('Login first to perform this action')
        }        
      })
      .then(() => {
        setContent('') 
      })
      .catch((error) => {
        setContent('')
        setError(true)
        setErrorMsg(error.message)
      })
  }
 
  return (
    <form onSubmit={(e) => handleTweet(e)} action="" method="POST" id="tweet-create-form" className="form-container">
      <div className="form-item">
        <label htmlFor="id_content">Content: </label>
        <textarea name="content" id="id_content" cols="50" rows="7" placeholder="Your tweet..." required={true} value={content} onChange={e => setContent(e.target.value)}></textarea>
      </div>
      {error && <div className="form-item">{<Message propClass='failure' message={errorMsg} />}</div>}
      <div className="form-item">
        <button type="submit" className="prim-btn cursor">Tweet</button>
      </div>
    </form>
  )
}


export default TweetCreate