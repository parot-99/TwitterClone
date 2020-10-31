import React, {Fragment, useState, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import AuthContext from './../utilities/AuthContext'


const Register = () => {
  const {CSRF} = useContext(AuthContext)
  const [username, setUserName] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [email, setEmail] = useState('')
  const history = useHistory()

  const clearFields = () => {
    setUserName('')
    setName('')
    setPassword('')
    setPassword2('')
    setEmail('')
  }
  
  const handleRegister = (event) => {
    event.preventDefault()

    const data = {
      username: username,
      name: name,
      password: password,
      password2: password2,
      email: email,
    }
  
    const url = '/api/auth/register/'
    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
        'Accept': 'application/json',
        'X-CSRFToken': CSRF
      },
      body: JSON.stringify(data)
    }

    fetch(url, request)
      .then(response => {
        clearFields()
        
        if(response.status === 201) {     
          history.push('/auth/login')
        }

        else {
          return response.json()
        }
      })
      .then(data => {
        if(data) {
          throw new Error(data[Object.keys(data)[0]])
        }
      })
      .catch(error => console.log(error))
  }

  return (
    <Fragment>
      <form onSubmit={e => handleRegister(e)} method="POST" className="form-container">
        <div className="form-item">
          <h1 className="main-color">Register</h1>
        </div>
        <div className="form-item">
          <label htmlFor="id_username">Username</label>
          <input type="text" name="username" id="id_username" value={username} onChange={e => setUserName(e.target.value)} autoComplete="off"/>
        </div>
        <div className="form-item">
          <label htmlFor="id_name">Name</label>
          <input type="text" name="name" id="id_name" value={name} onChange={e => setName(e.target.value)} autoComplete="off"/>
        </div>
        <div className="form-item">
          <label htmlFor="id_password">Password</label>
          <input type="password" name="password" id="id_password" value={password} onChange={e => setPassword(e.target.value)}/>
        </div>
        <div className="form-item">
          <label htmlFor="id_password2">Confirm Password</label>
          <input type="password" name="password2" id="id_password2" value={password2} onChange={e => setPassword2(e.target.value)}/>
        </div>
        <div className="form-item">
          <label htmlFor="id_email">Email</label>
          <input type="email" name="email" id="id_email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="off"/>
        </div>
        <div className="form-item">
          <input type="submit" value="Register" className="prim-btn cursor text-color"/>
        </div>
      </form>
      <div className="centered">
        <p>Already a user? <Link to="/auth/login" className="main-color">Login</Link></p>
      </div>
    </Fragment>
  )
}


export default Register