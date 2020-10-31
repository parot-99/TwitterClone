import React, {Fragment, useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthContext from './utilities/AuthContext'
import PrivateRoute from './utilities/PrivateRoute'
import getCookie from './utilities/getCookie'
import './App.css'
import './Form.css'
import './variables.css'
import Navbar from './base/Navbar'
import Tweets from './tweets/Tweets'
import Base from './base/Base'
import Landing from './base/Landing'
import Profiles from './profiles/Profiles'
import Settings from './settings/Settings'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [CSRF, setCSRF] = useState(null)
  const [error, setError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    setCSRF(getCookie('csrftoken'))
    
    const url = '/api/auth/authenticated/'
    const request = {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    }

    fetch(url, request)
      .then(response => {
        if(response.status === 200) {
          setIsAuthenticated(true)
          setCSRF(getCookie('csrftoken'))
          setIsLoaded(true)
          setError(false)
        }

        else {
          setIsLoaded(true)
          setError(true)
        }
      })
  }, [CSRF, isAuthenticated])

  
  return (
    <Fragment>
      {!isLoaded && <div className="loader"></div>}
      {error && <h1 className="message">Something wrog happend!</h1>}
      {!error && isLoaded &&
        <AuthContext.Provider value={{
          isAuthenticated,
          setIsAuthenticated,
          CSRF
        }}>
          <Router>
            <Switch>
              <Route exact path='/'>
                <Landing />
              </Route> 
              <Route path='/auth'>
                <Navbar />  
                <Base /> 
              </Route> 
              <PrivateRoute path='/home'>
                <Navbar />  
                <Tweets /> 
              </PrivateRoute>
              <PrivateRoute path='/profiles'>
                <Navbar />
                <Profiles />     
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
      }
    </Fragment>
  )
}


export default App
