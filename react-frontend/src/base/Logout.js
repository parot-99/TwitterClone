import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import AuthContext from './../utilities/AuthContext'


const Logout = () => {
  const {setIsAuthenticated, CSRF} = useContext(AuthContext)
  const history = useHistory()

	const handleLogout = () => {
    const url = '/api/auth/logout/'
    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': CSRF,
      },
      credentials: 'same-origin'
    }

    fetch(url, request)
      .then(response => {
        if(response.status === 200) {     
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
