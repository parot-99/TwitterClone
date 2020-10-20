import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import AuthContext from './../utilities/AuthContext'
import Logout from './Logout'


const Navbar = () => {
  const {isAuthenticated} = useContext(AuthContext)
  
  return (
    <header id="main-header">
      <div className="container flexed">
        <Link to='/'><h1 className="cursor clicked">TwitterClone</h1></Link>
        <nav className="nav-bar flexed">
          <Link to='/home'><h3 className="nav-btn cursor clicked">Home</h3></Link>
          <Link to='#'><h3 className="nav-btn cursor clicked">Contact</h3></Link>
          {!isAuthenticated && <Link to='/auth/Login'><h3 className="nav-btn cursor clicked">Login</h3></Link>}
          {isAuthenticated && <Logout />}  
        </nav>     
      </div>
    </header>
  )
}


export default Navbar
