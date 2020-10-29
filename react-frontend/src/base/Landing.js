import React from 'react'
import {Link} from 'react-router-dom'


const Landing = () => {
  return (
    <main id="welcome">
      <div id="join-us">     
        <Link to='/auth/register'><h1 >Join Us</h1></Link>
      </div>
    </main>
  )
}


export default Landing