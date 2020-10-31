import React from 'react'

const AuthContext = React.createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  CSRF: null 
})

export default AuthContext