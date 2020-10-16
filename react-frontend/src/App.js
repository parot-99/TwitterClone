import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import './variables.css'
import Navbar from './base/Navbar';
import Tweets from './tweets/Tweets'
import Base from './base/Base'
import Login from './base/Login'
import Profile from './profiles/profile'


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  useEffect(() => {
    const myToken = localStorage.getItem('token')

    const url = 'http://127.0.0.1:8000/api/profiles/token/verify/'
    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({token: myToken})
    }
    fetch(url, request)
      .then(response => {
        if(response.status === 401) {
          localStorage.removeItem('token')
        }
      })

    if(myToken) {
      setIsAuthenticated(true)
    }
  }, [])

  
  return (
    <Router>
      <Switch>  
        <Route exact path='/'>
          <Base />  
        </Route>
        <Route exact path='/login'>
          <Navbar isAuthenticated={isAuthenticated} />
          <main id="page-container">
            <Login />
          </main> 
        </Route>
        <Route exact path='/home'>
          <Navbar isAuthenticated={isAuthenticated} />
          <main id="page-container">
            <Tweets /> 
          </main>   
        </Route>
        <Route exact path='/profile/:id'>
          <Navbar isAuthenticated={isAuthenticated} />
          <main id="page-container">
            <Profile />
          </main>   
        </Route>
      </Switch>
    </Router>
  )
}


export default App;
