// @flow
import * as React from 'react'
import PropTypes from 'prop-types'

type State = {
  isError: boolean,
  stackTrace: string,
}

type Props = {
  children: React.ChildrenArray<React.Node>,
}

export default class ErrorBoundary extends React.Component<Props, State> {
  state = {
    isError: false,
    stackTrace: '',
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  componentDidCatch(error: Error, info: { componentStack: string }): void {
    this.setState({
      stackTrace: info.componentStack,
    })
  }

  static getDerivedStateFromError(): { isError: boolean } {
    return { isError: true }
  }

  render() {
    const { isError, stackTrace } = this.state
    const { children } = this.props
    return isError ? <div>Oops! An error occured {stackTrace}</div> : children
  }
}
