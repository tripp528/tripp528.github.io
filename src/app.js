import React, { useEffect } from 'react'

const App = () => {

  return (
    <div className="App" style={{height: '100%'}}>
      Static site
    </div>
  )
}

const AppWrapped = () => {
  return (
    <App />
  )
}

export default AppWrapped
