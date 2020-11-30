import React from 'react'
import './Profiles.css'
import {Switch, Route} from 'react-router-dom'
import Profile from './Profile'
import SearchProfiles from './SearchProfiles'
import {PageNotFound} from './../handlers'

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
          <PageNotFound name="home" to="/home" />
        </Route>
      </Switch>
    </main>
  )
}

export default Profiles
