import React, {useState, useContext} from 'react'
import AuthContext from './../utilities/AuthContext'


const TweetCreate = (props) => {
  const {CSRF} = useContext(AuthContext)
  const [content, setContent] = useState('')
  
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
          return response.json()
        }

        if (response.status === 400) {
          throw new Error('Try a shorter tweet')
        }

        throw new Error('Something wrong happend!')        
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
          id="id_content" cols="50" 
          rows="7" 
          placeholder="Your tweet..." 
          required={true} 
          value={content} 
          onChange={e => setContent(e.target.value)}
          autoComplete="off">
        </textarea>
      </div>
      <div className="form-item">
        <button type="submit" className="prim-btn cursor">Tweet</button>
      </div>
    </form>
  )
}


export default TweetCreate