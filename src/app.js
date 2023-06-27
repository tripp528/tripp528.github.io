import React, { useEffect } from 'react'
import LinkTree from 'linktree'

const App = () => {

  return (
    <div className="App" style={{
      height: '100%',
    }}>
      
      {/* <Why /> */}

      <LinkTree />

    </div>
  )
}

const AppWrapped = () => {
  return (
    <App />
  )
}

export default AppWrapped
