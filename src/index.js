import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.dark.css'
import './squarespace.css'
import './index.css'
import App from './app'
import { utils } from 'bi-compound-store'
import reportWebVitals from './reportWebVitals'

utils.remove_all_style()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
