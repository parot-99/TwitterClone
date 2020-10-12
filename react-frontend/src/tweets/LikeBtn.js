import React, {useState} from 'react'
import getCookie from '../getCookie'


const LikeBtn = (props) => {
	const [likes, setLikes] = useState(props.tweetLikes)

	const handleLike = (tweetId) => {
		const url = `http://127.0.0.1:8000/api/tweets/${tweetId}/like/`
		const request = {
			method: 'POST',
			headers: {
					'X-CSRFToken': getCookie('csrftoken'),
			},
		}

		fetch(url, request)
			.then(response => {
				if(response.status === 200) {
					return response.json()
				}

				if(response.status === 403) {
					throw new Error('Login first to perform this action')
				}

			})
			.then(
				(data) => {
					data.type==='like'? setLikes(likes+ 1): setLikes(likes- 1) 
				}, 
				(error) => {
					alert(error)
				}
			)
	}

  return (
    <button onClick={() => handleLike(props.tweetId)} className="prim-btn tweet-container-item cursor">
      {likes} likes
    </button>
  )
}


export default LikeBtn