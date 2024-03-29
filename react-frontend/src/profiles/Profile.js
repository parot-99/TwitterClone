import React, {Fragment, useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import FollowBtn from './FollowBtn'
import Tweet from './../tweets/Tweet'

const Profile = () => {
  const [user, setUser] = useState(false)
  const [userData, setUserData] = useState({})
  const [profileData, setProfileData] = useState({})
  const [tweetsData, setTweetsData] = useState([])
  const [error, setError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [followersFlag, setFollowersFlag] = useState(false)
  const {username} = useParams()

  useEffect(() => {
    const url = `/api/profiles/${username}/`
    const request = {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      },
      credentials: 'same-origin',
    }

    fetch(url, request)
      .then(response => {
        if(response.status === 200) {
          return response.json()
        }

        if(response.status === 404) {
          setUser(false)
          throw new Error('User not found')
        }

      })
      .then(data => {
        setIsLoaded(true)
        setUser(true)
        setError(false)
        setUserData(data.user_data)
        setProfileData(data.profile_data)
        setTweetsData(data.tweets_data)
      })
      .catch(error => {
        setIsLoaded(true)
        setError(true)
        console.log(error)
      })
  }, [username, followersFlag])

  const onFollowersChange = () => {
    setFollowersFlag(!followersFlag)
  }

  return (
    <Fragment>
      {!isLoaded && <div className="loader"></div>}
      {isLoaded && !user && 
        <h1 className="centered">User Not Found</h1>
      }
      {error && user && <h1 className="message">Something wrog happend!</h1>}
      {!error && isLoaded &&
        <Fragment>
          <section id="profile-info">
            <header id="profile-header" className="flexed">
              <div id="profile-pic">
                <img src={`${profileData.profile_pic}`} alt="Not Found"/>
              </div>
              <h1>{profileData.tweets_count} Tweets</h1>
              {userData.is_current_user && 
                <Link to="/settings">
                  <h3 className="prim-btn-2">Edit Profile</h3>
                </Link>  
              }
              {!userData.is_current_user && 
                <FollowBtn
                  isFollowed={userData.is_followed} 
                  username={userData.username}
                  onFollowersChange={onFollowersChange}>
                </FollowBtn>
              }
            </header>
            <h1 className="bolder">{profileData.name}</h1>
            <p className="light-text-color">@{userData.username}</p> 
            <p>{profileData.bio}</p> 
            <p className="light-text-color ">Joined {userData.date_joined}</p>
            {profileData.birthday &&
              <p className="light-text-color ">Born {profileData.birthday}</p>
            }
            <p className="light-text-color">
              <span className="bold"> {profileData.following_count} </span>
                <Link to={`/profiles/${userData.username}/following`}>
                  Following
                </Link>
              <span className="bold"> {profileData.followers_count} </span>
              <Link to={`/profiles/${userData.username}/followers`}>
                Followers
              </Link>
            </p>
          </section>
          <section id="tweets-container">    
            {tweetsData.map((tweet) => (
              <Tweet key={tweet.id} tweet={tweet} />
            ))}
          </section>
        </Fragment>
      }
    </Fragment>  
  )
}


export default Profile