import React from 'react'
import { render } from 'react-dom'
import App from './App'

import './styles/globalStyle.scss'

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
