import React from 'react'
import { Provider } from 'react-redux'
import { useRoutes } from 'hookrouter'
import jwtDecode from 'jwt-decode'

import store from './store'
import { Login, Register, NotFound } from './components'
import { setAuthToken } from './utils'
import { setCurrentUser, logout } from './actions/auth'

if (localStorage.access_token) {
  const { access_token } = localStorage
  setAuthToken(access_token)
  const decoded = jwtDecode(access_token)
  store.dispatch(setCurrentUser(decoded))
  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime) {
    store.dispatch(logout())
    window.location.href = '/login'
  }
}

const routes = {
  '/login': () => <Login />,
  '/register': () => <Register />,
}

function App() {
  const routeResult = useRoutes(routes) || <NotFound />
  return (
    <Provider store={store}>
      {routeResult}
    </Provider>
  )
}

export default App
