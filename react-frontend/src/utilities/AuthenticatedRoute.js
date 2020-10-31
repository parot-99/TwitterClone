import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'
import AuthContext from './AuthContext'


const AuthenticatedRoute = ({children, ...rest}) => {
  const {isAuthenticated} = useContext(AuthContext)
 
  return (
    <Route
      {...rest}
      render={({ location }) =>
      !isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/home',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

export default AuthenticatedRoute
