import React, {useState} from 'react'

const EmailSettings = () => {
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
        Authorization: `Token ${localStorage.getItem('accessToken')}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    fetch(url, request)
      .then(response => {
        clearFields()
        
        if([200, 401, 400].includes(response.status)) {
          return response.json()
        }

        else {
          throw new Error()
        }
      })
      .then(data => {
        if(data.message) {
          alert(data.message)
        }

        if(data.success) {
          alert(data.success)
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
