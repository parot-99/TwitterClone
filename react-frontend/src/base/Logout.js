import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import AuthContext from './../utilities/AuthContext'


const Logout = () => {
  const {setIsAuthenticated} = useContext(AuthContext)
  const history = useHistory()

	const handleLogout = () => {
    const url = 'http://127.0.0.1:8000/api/auth/logout/'
    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token  ${localStorage.getItem('accessToken')}`
      }
    }

    fetch(url, request)
      .then(response => {
        if(response.status === 204) {     
          localStorage.removeItem('accessToken')
          setIsAuthenticated(false)
          history.push('/')
        }

      })
      .catch(error => alert(error))
	}

  return (
    <h3 onClick={() => handleLogout()} className="nav-btn cursor clicked">Logout</h3> 
  )
}


export default Logout
