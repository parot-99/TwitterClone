import React from 'react'


const Logout = () => {
	const handleLogout = () => {
    localStorage.removeItem('token')
	}

  return (
    <h3 onClick={() => handleLogout()} className="nav-btn cursor clicked">Logout</h3> 
  )
}


export default Logout
