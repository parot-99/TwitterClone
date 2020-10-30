import React from 'react'
import './Profiles.css'
import {Switch, Route} from 'react-router-dom'
import Profile from './Profile'
import SearchProfiles from './SearchProfiles'

const Profiles = () => {
  return ( 
    <main id="page-container">
      <Switch>
        <Route exact path='/profiles/search'>
          <SearchProfiles />
        </Route>
        <Route exact path='/profiles/:username'>
          <Profile />
        </Route>
        <Route>
          <h1 className="centered">Not Found</h1>
        </Route>
      </Switch>
    </main>
  )
}

export default Profiles
