import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'



const Profile = () => {
  const [userData, setUserData] = useState({})
  const {id} = useParams()

  useEffect(() => {
    const url = `http://127.0.0.1:8000/api/profiles/${id}/`
    const request = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }

    fetch(url, request)
      .then(response => {
        if(response.status === 200) {
          return response.json()
        }
      })
      .then(data => setUserData(data))
      .catch(error => console.log(error))
  }, [id])

  return (
  <h1>{userData.username}</h1>
  )
}


export default Profile