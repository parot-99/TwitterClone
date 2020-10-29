import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import './Settings.css'
import ProfileSettings from './ProfileSettings'
import PasswordSettings from './PasswordSettings'
import EmailSettings from './EmailSettings'
import LogoutallSettings from './LogoutallSettings'
import DeleteAccount from './DeleteAccount'
import BackIcon from './../icons/BackIcon'


const Settings = () => {
  return (
    <main id="page-container" className="container">
      <Switch>
        <Route exact path='/settings'>
          <header id="settings-list"> 
            <Link to='/settings/profile'><h2>Profile</h2></Link>
            <Link to='/settings/password'><h2 >Password</h2></Link>
            <Link to='/settings/email'><h2 >Email</h2></Link>
            <Link to='/settings/logoutall'><h2 >Logout All Devices</h2></Link>
            <Link to='/settings/delete/profile'><h2 >Delete Account</h2></Link>
          </header>
        </Route>
        <Route exact path='/settings/profile'>
          <div className="settings-header">
            <BackIcon to='/settings'/>
            <h1>Update Profile</h1>
          </div>
          <ProfileSettings />
        </Route>
        <Route exact path='/settings/password'>
          <div className="settings-header">
            <BackIcon to='/settings'/>
            <h1>Update Password</h1>
          </div>
          <PasswordSettings />
        </Route>
        <Route exact path='/settings/email'>
          <div className="settings-header">
            <BackIcon to='/settings'/>
            <h1>Update Email</h1>
          </div>
          <EmailSettings />
        </Route>
        <Route exact path='/settings/logoutall'>
          <div className="settings-header">
            <BackIcon to='/settings'/>
            <h1>Logout All Devices</h1>
          </div>
          <LogoutallSettings />
        </Route>
        <Route exact path='/settings/delete/profile'>
          <div className="settings-header">
            <BackIcon to='/settings'/>
            <h1>Delete Acccount</h1>
          </div>
          <DeleteAccount />
        </Route>
        <Route>
          <h1 className="centered">Not Found</h1>
        </Route>
      </Switch>
    </main>
  )
}

export default Settings