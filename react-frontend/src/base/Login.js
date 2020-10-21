import React, {useState, useContext} from 'react'
import {Redirect, useHistory} from 'react-router-dom'
import AuthContext from './../utilities/AuthContext'


const Login = () => {
  const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext)
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  
  const handleLogin = (event) => {
    event.preventDefault()

    const data = {
      username: username,
      password: password
    }
    
    const url = 'http://127.0.0.1:8000/api/auth/login/'
    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    fetch(url, request)
      .then(response => {
        setUserName('')
        setPassword('')
        
        if(response.status === 200) {     
          return response.json()
        }

        if(response.status === 401) {
          throw new Error('Try again')
        }

        if(response.status === 400) {
          throw new Error('Try again')
        }
      })
      .then((data) => {
        localStorage.setItem('accessToken', data.token)
        setIsAuthenticated(true)
        history.push('/home')
      })
      .catch(error => alert(error))
  }

  if(isAuthenticated) {
    return <Redirect to="/home"></Redirect>
  }

  return (
    <main id="page-container">
      <form onSubmit={e => handleLogin(e)} action="" method="POST" className="form-container">
        <div className="form-item">
          <h1>Log In</h1>
        </div>
        <div className="form-item">
          <label htmlFor="id_username">Username</label>
          <input type="text" name="username" id="id_username" value={username} onChange={e => setUserName(e.target.value)}/>
        </div>
        <div className="form-item">
          <label htmlFor="id_password">Password</label>
          <input type="password" name="password" id="id_password" value={password} onChange={e => setPassword(e.target.value)}/>
        </div>
        <div className="form-item">
          <input type="submit" value="Log In" className="prim-btn cursor"/>
        </div>
      </form>
    </main>
  )
}


export default Login