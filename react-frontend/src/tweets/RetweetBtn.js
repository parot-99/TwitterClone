import React from 'react'


const RetweetBtn = (props) => {
  const handleRetweet = (tweetId) => {
    const url = `/api/tweets/${tweetId}/retweet/`
    const request = {
      method: 'POST',
      headers: {
        Authorization: `Token ${localStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
      }
    }

    fetch(url, request)
      .then(response => {
        if(response.status === 201) {
          props.onTweetAdd()
          return 
        }

        else {
          throw new Error('Something wrong happend!')
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