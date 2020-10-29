import React, {useContext, useEffect, useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import AuthContext from './../utilities/AuthContext'
import Logout from './Logout'


const Navbar = () => {
  const [userName, setUserName] = useState('')
  const {isAuthenticated} = useContext(AuthContext)
  const [isAuthenticatedState, setIsAuthenticatedState] = useState(false)
 
  useEffect(() => {
    setIsAuthenticatedState(isAuthenticated)

    if(isAuthenticatedState) {
      const url = '/api/profiles/current/user/'
      const request = {
        method: 'GET',
        headers: {
          'accepts': 'application/json',
          Authorization: `Token ${localStorage.getItem('accessToken')}`
        }
      }
     
      fetch(url, request)
        .then(response => {
          if(response.status === 200) {
            return response.json()
          }

          else {
            throw new Error(response.statusText)
          } 
        })
        .then(data => {
          setUserName(data.username)
        })
        .catch(error => console.log(error))
    }
  }, [isAuthenticated, isAuthenticatedState])
 
  return (
    <header id="main-header">
      <div className="container flexed">
        <Link to='/'><h1>TwitterClone</h1></Link>
        <nav className="nav-bar flexed">
          {isAuthenticated && 
            <NavLink to='/home' activeClassName="active" >
              <h3 className="nav-btn">Home</h3>
            </NavLink>
          }
          {isAuthenticated && 
            <NavLink to={`/profile/${userName}`} activeClassName="active">
              <h3 className="nav-btn">Profile</h3>
            </NavLink>
          }
          {isAuthenticated && 
            <NavLink to="/search" activeClassName="active">
              <h3 className="nav-btn">Search</h3>
            </NavLink>
          }
          {!isAuthenticated && 
            <NavLink to='/auth/login' activeClassName="active">
              <h3 className="nav-btn">Login</h3>
            </NavLink>
          }
          {!isAuthenticated && 
            <NavLink to='/auth/register' activeClassName="active">
              <h3 className="nav-btn">Register</h3>
            </NavLink>
          }
          {isAuthenticated && <Logout />}  
        </nav>     
      </div>
    </header>
  )
}


export default Navbar
