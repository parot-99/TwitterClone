import React, {useState, useContext} from 'react'
import AuthContext from './../utilities/AuthContext'


const EmailSettings = () => {
  const {CSRF} = useContext(AuthContext)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  
  const clearFields = () => {
    setPassword('')
    setEmail('')
  }

  const handleUpdate = (event) => {
    event.preventDefault()

    const data = {
      password: password,
      email: email,
    }

    const url = '/api/settings/update/email/'
    const request = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': CSRF,
      },
      credentials: 'same-origin',
      body: JSON.stringify(data)
    }

    fetch(url, request)
      .then(response => {
        clearFields()
        
        if ([200, 400].includes(response.status)) {
          return response.json()
        }
      })
      .then(data => {
        if(data.success) {
          alert(data.success)
        }

        if(data.failure) {
          alert(data.failure)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <form onSubmit={e => handleUpdate(e)} action="POST" className="form-container">  
      <div className="form-item">
        <label htmlFor="id_password">Confirm Password</label>
        <input type="password" name="password" id="id_password" value={password} onChange={e => setPassword(e.target.value)} required={true}/>
      </div>
      <div className="form-item">
        <label htmlFor="id_email">New Email</label>
        <input type="email" name="email" id="id_email" value={email} onChange={e => setEmail(e.target.value)} required={true} autoComplete="off"/>
      </div>
      <div className="form-item">
        <input type="submit" value="Update" className="prim-btn cursor text-color"/>
      </div>
    </form>
  )
}

export default EmailSettings
