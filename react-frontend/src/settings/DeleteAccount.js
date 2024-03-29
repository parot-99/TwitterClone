import React, {Fragment, useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import AuthContext from './../utilities/AuthContext'


const LogoutallSettings = () => {
  const [password, setPassword] = useState('')
  const {setIsAuthenticated, CSRF} = useContext(AuthContext)
  const history = useHistory()

  const handleConfirm = (event) => {
    event.preventDefault()

    const url = '/api/auth/confirmpassword/'
    const request = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': CSRF,
      },
      credentials: 'same-origin',
      body: JSON.stringify({password: password})
    }

    fetch(url, request)
      .then(response => {
        setPassword('')

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
          document.getElementById('confirm-delete').style.display = 'block'
        }
      })
      .catch(error => console.log(error))
  }

  const handleDelete = (event) => {
    const url = '/api/settings/delete/profile/'
    const request = {
      method: 'POST',
      headers: {
        Authorization: `Token ${localStorage.getItem('accessToken')}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

    fetch(url, request)
      .then(response => {
        if(response.status === 200) {
          setIsAuthenticated(false)
          history.push('/')
        }

      })  
      .catch(error => console.log(error))
  }

  return (
    <Fragment>
      <form onSubmit={e => handleConfirm(e)} action="POST" className="form-container">  
        <div className="form-item">
          <label htmlFor="id_password">
            Confirm Password To Delete Account
          </label>
          <input type="password" name="password" id="id_password" value={password} onChange={e => setPassword(e.target.value)} required={true}/>
        </div>
        <div className="form-item">
          <input type="submit" value="Confirm" className="prim-btn cursor text-color"/>
        </div>
      </form>
      <h2 id="confirm-delete" className="centered cursor" onClick={e => handleDelete(e)}>Delete Account</h2>
    </Fragment>
  )
}

export default LogoutallSettings