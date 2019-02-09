// @flow
import React from 'react'
import PropTypes from 'prop-types'

type State = {
  isError: boolean,
  stackTrace: string,
}

type Props = {
  children: Array<*>,
}

export default class ErrorBoundary extends React.Component<Props, State> {
  state = {
    isError: false,
    stackTrace: '',
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  componentDidCatch(error: any, info: any) {
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
