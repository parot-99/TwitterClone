import React from 'react'
import {Link} from 'react-router-dom'
import './Icon.css'

const BackIcon = (props) => {
  return (
    <Link to={props.to}>
      <div id="back"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M20 11H6.83l2.88-2.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L3.71 11.3c-.39.39-.39 1.02 0 1.41L8.3 17.3c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L6.83 13H20c.55 0 1-.45 1-1s-.45-1-1-1z"/>
        </svg>
      </div>
    </Link>
  )
}

export default BackIcon