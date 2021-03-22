import React, {Fragment, useEffect, useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import AuthContext from './../utilities/AuthContext'


const SearchProfiles = () => {
  const {CSRF} = useContext(AuthContext)
  const [user, setUsers] = useState([])
  const [username, setUsername] = useState('')

  useEffect(() => {
    const url = '/api/profiles/'
    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
        'Accept': 'application/json',
        'X-CSRFToken': CSRF
        
      },
      credentials: 'same-origin',
      body: JSON.stringify({'username': username}),
    }

    fetch(url, request)
      .then(response => {
        if(response.status === 200) {
          return response.json()
        }

        throw new Error()
      })
      .then(data => {
        setUsers(data || [])
      })
      .catch(error => console.log(error))
  }, [username, CSRF])

  
  return (
    <Fragment>
      <header className="form-container">
        <div className="form-item">
          <h1 className="main-color">Search Users</h1>
        </div>
        <div className="form-item">
          <label htmlFor="id_username">Username</label>
          <input 
            type="text" 
            name="username" 
            id="id_username" required={true} 
            autoComplete="off" 
            onChange={e => {setUsername(e.target.value)}}
          />
        </div>
        <div></div>
      </header>
      <section id="users-list">
        {user.map((user) => (
          <Link key={user.id} to={`/profiles/${user.username}`}>
            <h2>{user.username}</h2>
          </Link>
        ))}
      </section>
    </Fragment>
  )
}

export default SearchProfiles
