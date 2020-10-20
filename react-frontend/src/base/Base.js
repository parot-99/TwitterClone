import React from 'react'
import {Switch, Route} from 'react-router-dom'
import './Base.css'
import Login from './Login'
import Register from './Register'
import Navbar from './Navbar'


const Base = () => {
  return (
    <Switch>
      <Route path='/auth/login'>
        <Navbar />
        <Login />
      </Route>
      <Route path='/auth/register'>
        <Navbar />
        <Register />    
      </Route>
    </Switch>    
  )
}


export default Base