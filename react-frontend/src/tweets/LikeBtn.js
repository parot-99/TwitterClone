import React from 'react'
import getCSRF from './../getCSRF'


const LikeBtn = (props) => {
	const handleLike = (tweetId) => {
		const url = `http://127.0.0.1:8000/api/tweets/${tweetId}/like/`
		const request = {
			method: 'POST',
			headers: {
					'X-CSRFToken': getCSRF('csrftoken'),
			},
		}

		fetch(url, request)
			.then(response => {
				if(response.status === 200) {
					alert('ok')
				}

				if(response.status === 403) {
					throw new Error('Login first to perform this action')
				}

			})
			.then(
				() => {}, 
				(error) => {
					alert(error)
				}
			)
	}

  return (
    <button onClick={() => handleLike(props.tweetId)} className="prim-btn tweet-container-item cursor">
      {props.tweetLikes} likes
    </button>
  )
}


export default LikeBtn