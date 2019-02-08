import React from 'react'
import PropTypes from 'prop-types'

export default class ErrorBoundary extends React.Component {
  state = {
    isError: false,
  }

  static propTypes = {
    children: PropTypes.array.isRequired,
  }

  static getDerivedStateFromError() {
    return { isError: true }
  }

  render() {
    const { isError } = this.state
    const { children } = this.props
    return isError ? <div>Oops! An error occured.</div> : children
  }
}
