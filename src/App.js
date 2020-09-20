import React from 'react'
import Home from './views/Home'
import { Switch, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route strict sensitive path='/home' component={Home} />
      <Redirect push from='/' to='/home' />
    </Switch>
  )
}

export default App
