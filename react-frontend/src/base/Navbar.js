import React, {useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import AuthContext from './../utilities/AuthContext'
import Logout from './Logout'


const Navbar = () => {
  const [userName, setUserName] = useState('')
  const {isAuthenticated} = useContext(AuthContext)

  useEffect(() => {
    const url = 'http://127.0.0.1:8000/api/profiles/current/user/'
    const request = {
      method: 'GET',
      headers: {
        Authorization: `Token ${localStorage.getItem('accessToken')}`
      }
    }

    fetch(url, request)
      .then(response => response.json())
      .then(data => setUserName(data.username))
      .catch(error => console.log(error))
  }, [])
  
  return (
    <header id="main-header">
      <div className="container flexed">
        <Link to='/'><h1 className="cursor clicked">TwitterClone</h1></Link>
        <nav className="nav-bar flexed">
          <Link to='/home'><h3 className="nav-btn cursor clicked">Home</h3></Link>
          <Link to={`profile/${userName}/`}><h3 className="nav-btn cursor clicked">{userName}</h3></Link>
          {!isAuthenticated && <Link to='/auth/login'><h3 className="nav-btn cursor clicked">Login</h3></Link>}
          {isAuthenticated && <Logout />}  
        </nav>     
      </div>
    </header>
  )
}


export default Navbar
