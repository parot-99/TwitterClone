import React, {useState} from 'react'
import getCSRF from './../getCSRF'


const TweetCreate = () => {
  const [error, setError] = useState(false)
  const csrftoken = getCSRF('csrftoken')

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
        }, 
        (error) => {
          myForm.reset()
          setError(true)
        } 
      )  
  }
 
  return (
    <form onSubmit={(event) => handleTweet(event)} method="POST" action="api/tweets/create" id="tweet-create-form" className="form-container">
      <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken}></input>
      <div className="form-item">
        <label htmlFor="id_content">Content: </label>
        <textarea name="content" id="id_content" cols="50" rows="7" placeholder="Your tweet..." required={true}></textarea>
      </div>
      {error && <div className="form-item">Error</div>}
      <div className="form-item">
        <button type="submit" className="prim-btn cursor">Tweet</button>
      </div>
    </form>
  )
}


export default TweetCreate