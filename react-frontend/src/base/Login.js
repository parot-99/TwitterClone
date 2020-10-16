import React, {useState} from 'react'


const Login = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  
  const handleLogin = (event) => {
    event.preventDefault()

    const data = {
      username: username,
      password: password
    }
    
    const url = 'http://127.0.0.1:8000/api/profiles/token/'
    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    fetch(url, request)
      .then(response => {
        if(response.status === 200) {
          return response.json()
        }

        if(response.status === 400) {
          throw new Error('')
        }
      })
      .then((data) => {
        localStorage.setItem('token', data.access)
      })
      .catch(error => console.log(error))
  }

  return (
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
  )
}


export default Login