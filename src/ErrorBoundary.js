import React from 'react'
import PropTypes from 'prop-types'

export default class ErrorBoundary extends React.Component {
  state = {
    isError: false,
    stackTrace: '',
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  componentDidCatch(error, info) {
    this.setState({
      stackTrace: info.componentStack,
    })
  }

  static getDerivedStateFromError() {
    return { isError: true }
  }

  render() {
    const { isError, stackTrace } = this.state
    const { children } = this.props
    return isError ? <div>Oops! An error occured {stackTrace}</div> : children
  }
}
