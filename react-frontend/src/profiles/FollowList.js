import React, {Fragment, useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'


const FollowList = (props) => {
  const [followList, setFollowList] = useState([])  
  const [error, setError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const {username} = useParams()

  useEffect(() => {
    const url = `/api/profiles/${username}/${props.followType}/`
    const request = {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      },
      credentials: 'same-origin',
    }

    fetch(url, request)
      .then(response => {
        if (response.status === 200) {
          return response.json()
        }

      })
      .then(data => {
        setIsLoaded(true)
        setFollowList(data.follow_list)
      })
      .catch(error => {
        setIsLoaded(true)
        setError(true)
      })
    
    
  }, [username, props.followType])

  return (
    <Fragment>
      {!isLoaded && <div className="loader"></div>}
      {error && <h1 className="message">Something wrog happend!</h1>}
      {!error && isLoaded &&
        <section id="users-list">
        {followList.map((profile) => (
          <Link key={profile} to={`/profiles/${profile}`}>
            <h2>{profile}</h2>
          </Link>
        ))}
      </section>
      }
    </Fragment>
  )
}

export default FollowList
