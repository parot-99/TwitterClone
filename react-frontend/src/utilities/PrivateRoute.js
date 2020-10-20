import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({children, ...rest}) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
      localStorage.getItem('accessToken') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/auth/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
