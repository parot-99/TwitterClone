import React, {useState, useContext} from 'react'
import AuthContext from './../utilities/AuthContext'

const LikeBtn = (props) => {
  const {CSRF} = useContext(AuthContext)
  const [likes, setLikes] = useState(props.tweetLikes)
  const [isLiked, setIsLiked] = useState(props.isLiked)
  const [isLoaded, setIsLoaded] = useState(true)

    const handleLike = (tweetId) => {
      setIsLoaded(false)

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
            setIsLiked(!isLiked)
            isLiked? setLikes(likes - 1): setLikes(likes + 1) 
            setIsLoaded(true)
          }

          else {
            throw new Error('Something Wrong Happend!')
          }
        })
        .catch(error => {
          alert(error)
        })
    }

  return (
    <button onDoubleClick={() => handleLike(props.tweetId)} onClick={() => handleLike(props.tweetId)} className="prim-btn tweet-container-item cursor">
      {!isLoaded && <div className="btn-loader prim-btn"></div>}
      {isLoaded && !isLiked && likes + ' likes'} 
      {isLoaded && isLiked && likes + ' liked'} 
    </button>  
  )
}


export default LikeBtn