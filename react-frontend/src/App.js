import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthContext from './utilities/AuthContext'
import PrivateRoute from './utilities/PrivateRoute'
import './App.css'
import './Form.css'
import './variables.css'
import Navbar from './base/Navbar'
import Tweets from './tweets/Tweets'
import Base from './base/Base'
import Landing from './base/Landing'
import Profile from './profiles/Profile'
import Settings from './settings/Settings'


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const value = {isAuthenticated, setIsAuthenticated}

  useEffect(() => {
    const myToken = localStorage.getItem('accessToken')
    myToken? setIsAuthenticated(true): setIsAuthenticated(false)
  }, [isAuthenticated])

  
  return (
    <AuthContext.Provider value={value}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route> 
          <Route path='/auth'>
            <Navbar />  
            <Base /> 
          </Route> 
          <PrivateRoute exact path='/home'>
            <Navbar />  
            <Tweets /> 
          </PrivateRoute>
          <PrivateRoute exact path='/profile/:username'>
            <Navbar />
            <Profile />     
          </PrivateRoute>
          <PrivateRoute path='/settings'>
            <Navbar />  
            <Settings /> 
          </PrivateRoute>
          <Route>
            <h1 className="centered">Not Found</h1>
          </Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  )
}


export default App
