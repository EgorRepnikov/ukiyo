import React from 'react'
import { Provider } from 'react-redux'
import { useRoutes } from 'hookrouter'

import store from './store'
import { Login, Register } from './components'

const routes = {
  '/login': () => <Login />,
  '/register': () => <Register />,
}

function App() {
  const routeResult = useRoutes(routes) || <div></div>
  return (
    <Provider store={store}>
      {routeResult}
    </Provider>
  )
}

export default App
