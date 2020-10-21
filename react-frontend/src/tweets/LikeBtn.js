import React, {useState} from 'react'


const LikeBtn = (props) => {
  const [likes, setLikes] = useState(props.tweetLikes)
  const [isLiked, setIsLiked] = useState(props.isLiked)

	const handleLike = (tweetId) => {
		const url = `http://127.0.0.1:8000/api/tweets/${tweetId}/like/`
		const request = {
			method: 'POST',
			headers: {
				Authorization: `Token ${localStorage.getItem('accessToken')}`
      }   
		}

		fetch(url, request)
			.then(response => {
				if(response.status === 200) {
					return response.json()
				}

				if(response.status === 401) {
					throw new Error('Login first to perform this action')
				}
			})
			.then((data) => {
        data.type==='like'? setLikes(likes+ 1): setLikes(likes- 1) 
        data.type==='like'? setIsLiked(true): setIsLiked(false) 
      })
			.catch(error => {
        alert(error)
      })
	}

  return (
    <button onClick={() => handleLike(props.tweetId)} className="prim-btn tweet-container-item cursor">
      {!isLiked && likes + ' likes'} 
      {isLiked && likes + ' liked'} 
    </button>
  )
}


export default LikeBtn