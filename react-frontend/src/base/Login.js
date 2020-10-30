import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import AuthContext from './../utilities/AuthContext'


const Login = () => {
  const {setIsAuthenticated} = useContext(AuthContext)
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const clearFields = () => {
    setUserName('')
    setPassword('')
  }

  const handleLogin = (event) => {
    event.preventDefault()

    const data = {
      username: username,
      password: password
    }
    
    const url = '/api/auth/login/'
    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    }

    fetch(url, request)
      .then(response => {
        clearFields()
        
        if(response.status === 200) {     
          return response.json()
        }

        else {
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

  return ( 
    <form onSubmit={e => handleLogin(e)} action="" method="POST" className="form-container">
      <div className="form-item">
        <h1 className="main-color">Log In</h1>
      </div>
      <div className="form-item">
        <label htmlFor="id_username">Username</label>
        <input type="text" name="username" id="id_username" value={username} onChange={e => setUserName(e.target.value)} required={true} autoComplete="off"/>
      </div>
      <div className="form-item">
        <label htmlFor="id_password">Password</label>
        <input type="password" name="password" id="id_password" value={password} onChange={e => setPassword(e.target.value)} required={true}/>
      </div>
      <div className="form-item">
        <input type="submit" value="Log In" className="prim-btn cursor"/>
      </div>
    </form>
  )
}


export default Login