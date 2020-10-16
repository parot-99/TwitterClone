import React from 'react'


const RetweetBtn = (props) => {
  const handleRetweet = (tweetId) => {
    const url = `http://127.0.0.1:8000/api/tweets/${tweetId}/retweet/`
    const request = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }

    fetch(url, request)
      .then(response => {
        if(response.status === 201) {
          return 
        }
      })
      .catch(error => console.log(error))
  }

  return (
    <button onClick={() => handleRetweet(props.tweetId)} className="prim-btn tweet-container-item cursor">
      retweet
    </button>
  )
}


export default RetweetBtn