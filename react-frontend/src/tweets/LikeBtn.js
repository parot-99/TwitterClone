import React, {useState, useContext} from 'react'
import AuthContext from './../utilities/AuthContext'

const LikeBtn = (props) => {
  const {CSRF} = useContext(AuthContext)
  const [likes, setLikes] = useState(props.tweetLikes)
  const [isLiked, setIsLiked] = useState(props.isLiked)

    const handleLike = (tweetId) => {
      const url = `/api/tweets/${tweetId}/like/`
      const request = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
          'Accept': 'application/json',
          'X-CSRFToken': CSRF
        },
        credentials: 'same-origin',  
      }

      fetch(url, request)
        .then(response => {
          if(response.status === 200) {
            return response.json()
          }

          else {
            throw new Error()
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