import React, {useState} from 'react'
import getCookie from '../getCookie'
import Message from './../messages/Message'


const TweetCreate = (props) => {
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const csrftoken = getCookie('csrftoken')

  const handleTweet = (event) => {
    event.preventDefault()
    const myForm = event.target
    // const url = myForm.action
    const url = 'http://127.0.0.1:8000/api/tweets/create/'
    const myFormData = new URLSearchParams(new FormData(myForm))
    const request = {
      method: 'POST',
      headers: {
        'X-CSRFToken': csrftoken,
        'X-Requested-With': 'XMLHttpRequest', 
        'Content-Type': "application/json", 
      },
      body: myFormData
    }

    fetch(url, request)
      .then(response => {
        if(response.status === 201) {
          return response.json()
        }

        if(response.status === 400) {
          throw new Error('Try a shorter tweet')
        }

        if(response.status === 403) {
          throw new Error('Login first to perform this action')
        }        
      })
      .then(
        () => {
          myForm.reset()
          // props.onFormPost()
        }, 
        (error) => {
          myForm.reset()
          setError(true)
          setErrorMsg(error.message)
        } 
      )  
  }
 
  return (
    <form onSubmit={(event) => handleTweet(event)} method="POST" action="api/tweets/create" id="tweet-create-form" className="form-container">
      <input value={csrftoken} type="hidden" name="csrfmiddlewaretoken" ></input>
      <div className="form-item">
        <label htmlFor="id_content">Content: </label>
        <textarea name="content" id="id_content" cols="50" rows="7" placeholder="Your tweet..." required={true}></textarea>
      </div>
      {error && <div className="form-item">{<Message propClass='failure' message={errorMsg} />}</div>}
      <div className="form-item">
        <button type="submit" className="prim-btn cursor">Tweet</button>
      </div>
    </form>
  )
}


export default TweetCreate