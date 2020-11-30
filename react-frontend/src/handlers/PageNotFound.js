import React from 'react'
import {Link} from 'react-router-dom'
import './Handlers.css'
import SadIcon from './../icons/SadIcon'

const PageNotFound = (props) => {
  return (
    <main id="page-not-found">
      <h1 className="centered">
        Sorry, the page You are looking for can not be found
      </h1>
      <SadIcon />
      <Link to={props.to}>
        <h2 className="centered prim-btn-2">{`Go back to ${props.name}`}</h2>
      </Link>
    </main>
  )
}

export default PageNotFound
