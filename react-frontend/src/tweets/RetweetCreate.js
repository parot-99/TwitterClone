import React, {Fragment, useState, useContext} from 'react'
import {useLocation, useHistory} from 'react-router-dom'
import Retweet from './Retweet'
import AuthContext from './../utilities/AuthContext'


const RetweetCreate = () => {
  const {CSRF} = useContext(AuthContext)
  const location = useLocation()
  const history = useHistory()
  const [content, setContent] = useState('')
 
  const handleRetweet = (event) => {
    event.preventDefault()
    
    const url = `/api/tweets/${location.state.tweet.id}/retweet/`
    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
        'Accept': 'application/json',
        'X-CSRFToken': CSRF
      },
      credentials: 'same-origin',
      body: JSON.stringify({content: content})
    }

    fetch(url, request)
      .then(response => {
        if(response.status === 201) {
          history.push('/home')
          return 
        }

        else {
          throw new Error('Something wrong happend!')
        }

      })
      .catch(error => console.log(error))
  }

  return (
    <Fragment>
      <form onSubmit={(e) => handleRetweet(e)} method="POST" id="tweet-create-form" className="form-container">
        <div className="form-item">
          <textarea 
            name="content" 
            id="id_content" cols="50" 
            rows="7" 
            placeholder="Add a comment" 
            required={true} 
            value={content} 
            onChange={e => setContent(e.target.value)}
            autoComplete="off">
          </textarea>
        </div>
        <div className="form-item">
          <button type="submit" className="prim-btn cursor">Retweet</button>
        </div>
      </form>
      <Retweet tweet={location.state.tweet} />
    </Fragment>
  )
}

export default RetweetCreate
