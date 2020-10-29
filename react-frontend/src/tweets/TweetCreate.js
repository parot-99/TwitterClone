import React, {useState} from 'react'


const TweetCreate = (props) => {
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
        Authorization: `Token ${localStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
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
        
        else {
          throw new Error('Something wrong happend!')
        }
        
      })
      .then(() => {
        setContent('') 
      })
      .catch((error) => {
        console.log(error)
      })
  }
 
  return (
    <form onSubmit={(e) => handleTweet(e)} action="" method="POST" id="tweet-create-form" className="form-container">
      <div className="form-item">
        <textarea 
          name="content" 
          id="id_content" cols="50" 
          rows="7" 
          placeholder="Your tweet..." 
          required={true} 
          value={content} 
          onChange={e => 
          setContent(e.target.value)}>
        </textarea>
      </div>
      <div className="form-item">
        <button type="submit" className="prim-btn cursor">Tweet</button>
      </div>
    </form>
  )
}


export default TweetCreate