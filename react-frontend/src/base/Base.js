import React from 'react'
import {Switch, Route} from 'react-router-dom'
import './Base.css'
import Login from './Login'
import Register from './Register'
import AuthenticatedRoute from './../utilities/AuthenticatedRoute'


const Base = () => {
  return (
    <main id="page-container">
      <Switch>
        <AuthenticatedRoute exact path='/auth/login'>
          <Login />
        </AuthenticatedRoute>
        <AuthenticatedRoute exact path='/auth/register'>
          <Register />    
        </AuthenticatedRoute>
        <Route>
          <h1 className="centered">Not Found</h1>
        </Route>
      </Switch>  
    </main>  
  )
}


export default Base