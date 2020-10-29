import React from 'react'
import {Route, Redirect} from 'react-router-dom'


const AuthenticatedRoute = ({children, ...rest}) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
      !localStorage.getItem('accessToken') ? (
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
