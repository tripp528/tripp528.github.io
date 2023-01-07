import React, { useEffect } from 'react'
import { hooks, Provider } from 'bi-compound-store'

import Router from 'pages/router'

const App = () => {
  const dispatch = hooks.useDispatch()

  useEffect(() => {
    // load objects from database
    for (const object_name of [
      'application',
      'polymer_designation',
      'project',
      'trial',
      'property',
      'property_type',
      'ingredient_type',
      'ingredient_category',
      'ingredient_row',
      'ingredient',
    ]) {
      dispatch({
        type: 'get',
        object_name: object_name,
        params: {customer_portal: true},
        no_refresh: true
      })
    }

    // set current page
    dispatch({type: 'set_value', path: ['current_page'], value: 'landing_page'})
  }, [dispatch])

  return (
    <div className="App" style={{height: '100%'}}>
      <Router />
    </div>
  )
}

const AppWrapped = () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}

export default AppWrapped
