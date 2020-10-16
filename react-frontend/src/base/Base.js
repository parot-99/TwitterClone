import React from 'react'
import {Link} from 'react-router-dom'
import './Base.css'


const Base = () => {
  return (
    <main id="welcome">
      <div id="join-us">     
        <Link to='/login'><h1 >Join Us</h1></Link>
      </div>
    </main>
  )
}


export default Base