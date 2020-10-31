import React, {Fragment, useState, useEffect, useContext} from 'react'
import AuthContext from './../utilities/AuthContext'


const FollowBtn = (props) => {
  const {CSRF} = useContext(AuthContext)
  const [isFollowed, setIsFollowed] = useState(false)

  useEffect(()=> {
    setIsFollowed(props.isFollowed)
  }, [props.isFollowed])

  const handleFollow = () => {
    const url = `/api/profiles/${props.username}/follow/`
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

        throw new Error()
      })
      .then(data => {
        if(data.message === 'followed') {
          setIsFollowed(true)
        }

        if(data.message === 'unfollowed') {
          setIsFollowed(false)
        }
      })
      .catch(error => console.log(error))

  }

  return (
    <Fragment>
      {isFollowed && 
        <h3 onClick={handleFollow} className="prim-btn-2 cursor">Unfollow</h3>
      }
      {!isFollowed && 
        <h3 onClick={handleFollow} className="prim-btn-2 cursor">Follow</h3>
      }
    </Fragment>
  )
}

export default FollowBtn
