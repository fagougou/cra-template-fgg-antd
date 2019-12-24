import React from 'react'
import { Router } from '@reach/router'
import Home from './pages/home'

const App = () => {
  return (
    <Router>
      <Home path="/" />
    </Router>
  )
}

export default App