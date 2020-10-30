import React, {useState, useEffect} from 'react'

const ProfileSettings = () => {
  const [bio, setBio] = useState('')
  const [birthday, setBirthday] = useState('')
  const [name, setName] = useState('')
  const [profilePic, setProfilePic] = useState(null)

  useEffect(() => {
    const url = '/api/settings/update/profile/'
    const request = {
      method: 'GET',
      headers: {
        Authorization: `Token ${localStorage.getItem('accessToken')}`,
        'Accept': 'application/json'
      }
    }

    fetch(url, request)
      .then(response => {
        if(response.status === 200) {
          return response.json()
        }

        else {
          throw new Error()
        }
      })
      .then(data => {
        setBio(data.bio || '')
        setBirthday(data.birthday || '')
        setName(data.name)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const handleUpdate = (event) => {
    event.preventDefault()

    const formData = new FormData()

    formData.append('bio', bio)
    formData.append('birthday', birthday)
    formData.append('name', name)

    if(profilePic) {
      formData.append('profile_pic', profilePic, profilePic.name)
    }

    const url = '/api/settings/update/profile/'
    const request = {
      method: 'PUT',
      headers: {
        Authorization: `Token ${localStorage.getItem('accessToken')}`,
      },
      body: formData
    }

    fetch(url, request)
      .then(response => {
        if(response.status === 200) {
         alert('updated')
        }

        else {
          throw new Error()
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
  

  return (
    <form onSubmit={e => handleUpdate(e)} action="POST" className="form-container" encType="multipart/form-data">
      <div className="form-item">
        <label htmlFor="id_name">Name</label>
        <input type="text" name="name" id="id_name" value={name} onChange={e => setName(e.target.value)} autoComplete="off"/>
      </div>
      <div className="form-item">
        <label htmlFor="id_bio">Bio</label>
        <input type="text" name="bio" id="id_bio" value={bio} onChange={e => setBio(e.target.value)} autoComplete="off"/>
      </div>
      <div className="form-item">
        <label htmlFor="">Birthday</label>
        <input type="date" name="birthday" id="id_birthday" value={birthday} onChange={e => setBirthday(e.target.value)}/>
      </div>
      <div className="form-item">
        <label htmlFor="id_image">Profile Picture:</label> 
        <div className="fileUpload prim-btn-2">
          <span>Upload</span> 
          <input type="file" name="profile_pic" id="id_profile_pic" className="upload" accept="image/*" onChange={e => setProfilePic(e.target.files[0])}/> 
        </div>
      </div>
      <div className="form-item">
        <input type="submit" value="Update" className="prim-btn cursor text-color"/>
      </div>
    </form>
  )
}

export default ProfileSettings
