// @flow
import * as React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import '@babel/polyfill'
import App from './components/App'
import ErrorBoundary from './ErrorBoundary'

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

const root = document.getElementById('root')

if (root !== null) {
  ReactDOM.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>,
    root,
  )
}
