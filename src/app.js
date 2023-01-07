import React, { useEffect } from 'react'
import Why from 'posts/why'

const App = () => {

  return (
    <div className="App" style={{height: '100%'}}>
      
      <Why />

    </div>
  )
}

const AppWrapped = () => {
  return (
    <App />
  )
}

export default AppWrapped
