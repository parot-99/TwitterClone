import React from 'react'
import {Link} from 'react-router-dom'
import Logout from './Logout'


const Navbar = (props) => {
  return (
    <header id="main-header">
      <div className="container flexed">
        <Link to='/'><h1 className="cursor clicked">TwitterClone</h1></Link>
        <nav className="nav-bar flexed">
          <Link to='/home'><h3 className="nav-btn cursor clicked">Home</h3></Link>
          <Link to='#'><h3 className="nav-btn cursor clicked">Contact</h3></Link>
          {!props.isAuthenticated && <Link to='/Login'><h3 className="nav-btn cursor clicked">Login</h3></Link>}
          {props.isAuthenticated && <Logout />}  
        </nav>     
      </div>
    </header>
  )
}


export default Navbar
