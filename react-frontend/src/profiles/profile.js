import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import TweetList from './../tweets/TweetList'
import './Profile.css'



const Profile = () => {
  const [userData, setUserData] = useState({})
  const [tweetsData, setTweetsData] = useState([])
  const {username} = useParams()

  useEffect(() => {
    const url = `http://127.0.0.1:8000/api/profiles/${username}/`
    const request = {
      method: 'GET',
      headers: {
        Authorization: `Token ${localStorage.getItem('accessToken')}`
      }
    }

    fetch(url, request)
      .then(response => {
        if(response.status === 200) {
          return response.json()
        }
      })
      .then(data => {
        setUserData(data.user_data) 
        setTweetsData(data.tweets_data)
        console.log(data)
      })
      .catch(error => console.log(error))
  }, [username])
  
  return (
    <main id="page-container" className="container">
      <section id="profile-info">
        <header id="profile-header" className="flexed">
          <div id="profile-pic">
          </div>
          {userData.is_current_user && <h3 className="prim-btn-2 cursor">Edit Profile</h3>}
        </header>
        <h1 className="bolder">{userData.first_name} {userData.last_name}</h1>
        <p>@{userData.username}</p> 
        <p>Joined {userData.date_joined}</p>
        <p><span className="bolder">36</span> Following <span className="bold"> 36 </span>Followers</p>
      </section>
      <TweetList tweets={tweetsData} />
    </main>  
  )
}


export default Profile