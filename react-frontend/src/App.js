import React, {Fragment, useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './BseCSS/index'
import {AuthContext, PrivateRoute, getCookie} from './utilities'
import {PageNotFound} from './handlers'
import {Navbar, Base, Landing} from './base'
import Tweets from './tweets/Tweets'
import Profiles from './profiles/Profiles'
import Settings from './settings/Settings'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [CSRF, setCSRF] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
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
        }

        setIsLoaded(true)     
      })
  }, [CSRF, isAuthenticated])

  return (
    <Fragment>
      {!isLoaded && <div className="loader"></div>}
      {isLoaded &&
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
                <PageNotFound name="Landing Page" to="/" />
              </Route>
            </Switch>
          </Router>
        </AuthContext.Provider>
      }
    </Fragment>
  )
}


export default App
