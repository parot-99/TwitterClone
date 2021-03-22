import React, {useState, useContext} from 'react'
import AuthContext from './../utilities/AuthContext'


const PasswordSettings = () => {
  const {CSRF} = useContext(AuthContext)
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPassword2, setNewPassword2] = useState('')

  const clearFields = () => {
    setOldPassword('')
    setNewPassword('')
    setNewPassword2('')
  }

  const handleUpdate = (event) => {
    event.preventDefault()

    const data = {
      old_password: oldPassword,
      new_password: newPassword,
      new_password2: newPassword2
    }

    const url = '/api/settings/update/password/'
    const request = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': CSRF
      },
      credentials: 'same-origin',
      body: JSON.stringify(data)
    }

    fetch(url, request)
      .then(response => {
        clearFields()

        if([200, 400, 401].includes(response.status)) {
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
        <label htmlFor="id_old_password">Old Password</label>
        <input type="password" name="old_password" id="id_old_password" value={oldPassword} onChange={e => setOldPassword(e.target.value)} required={true}/>
      </div>
      <div className="form-item">
        <label htmlFor="id_old_password">New Password</label>
        <input type="password" name="new_password" id="id_new_password" value={newPassword} onChange={e => setNewPassword(e.target.value)} required={true}/>
      </div>
      <div className="form-item">
        <label htmlFor="id_old_password">Confirm New Password</label>
        <input type="password" name="new_password2" id="id_new_password2" value={newPassword2} onChange={e => setNewPassword2(e.target.value)} required={true}/>
      </div>
      <div className="form-item">
        <input type="submit" value="Update" className="prim-btn cursor text-color"/>
      </div>
    </form>
  )
}

export default PasswordSettings
