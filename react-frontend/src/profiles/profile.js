import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'



const Profile = () => {
  const [userData, setUserData] = useState({})
  const [isUser, setIsUser] = useState(false)
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
          setIsUser(true)
          return response.json()
        }
      })
      .then(data => setUserData(data))
      .catch(error => console.log(error))
  }, [username])

  return (
    <main id="page-container">
      <h1>{isUser && userData.username}</h1>
      <h1>{isUser && userData.email}</h1>
      <h1>{isUser && userData.is_current_user && 'Current User'}</h1>
      <h1>{!isUser && 'User does not exist'}</h1> 
    </main>  
  )
}


export default Profile