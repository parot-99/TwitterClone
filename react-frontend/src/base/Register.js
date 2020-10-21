import React, {useState, useContext} from 'react'
import {Link, Redirect, useHistory} from 'react-router-dom'
import AuthContext from './../utilities/AuthContext'


const Register = () => {
  const {isAuthenticated} = useContext(AuthContext)
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const history = useHistory()
  
  const handleRegister = (event) => {
    event.preventDefault()

    const data = {
      username: username,
      password: password,
      password2: password2,
      email: email,
      firstName: firstName,
      lastName: lastName
    }
    
    const url = 'http://127.0.0.1:8000/api/auth/register/'
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
        setPassword2('')
        setEmail('')
        setFirstName('')
        setLastName('')
        
        if(response.status === 201) {     
          history.push('/auth/login')
        }

        if(response.status === 400) {     
          return response.json()
        }

      })
      .then((data) => {
        console.log(data);
      })
      .catch(error => alert(error))
  }

  if(isAuthenticated) {
    return <Redirect to="/home"></Redirect>
  }
  
  return (
    <main id="page-container">
      <form onSubmit={e => handleRegister(e)} action="" method="POST" className="form-container">
        <div className="form-item">
          <h1>Register</h1>
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
          <label htmlFor="id_password2">Confirm Password</label>
          <input type="password" name="password2" id="id_password2" value={password2} onChange={e => setPassword2(e.target.value)}/>
        </div>
        <div className="form-item">
          <label htmlFor="id_email">Email</label>
          <input type="email" name="email" id="id_email" value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="form-item">
          <label htmlFor="id_first_name">First Name (Optional)</label>
          <input type="text" name="first_name" id="id_first_name" value={firstName} onChange={e => setFirstName(e.target.value)}/>
        </div>
        <div className="form-item">
          <label htmlFor="id_last_name">Last Name (Optional)</label>
          <input type="text" name="last_name" id="id_last_name" value={lastName} onChange={e => setLastName(e.target.value)}/>
        </div>
        <div className="form-item">
          <input type="submit" value="Register" className="prim-btn cursor"/>
        </div>
        <div>
          <p>Already a user? <Link to="/auth/login" className="link">Login</Link></p>
        </div>
      </form>
    </main>
  )
}


export default Register