import React from 'react'
import DataSource from './dataSource'

// This function takes a component...
function HOCWrapper (WrappedComponent) {
  // ...and returns another component...
  return class extends React.Component {
    constructor (props) {
      super(props)
      this.handleChange = this.handleChange.bind(this)
      if (this.props.type === 'comments') {
        this.state = {
          data: DataSource.getComments()
        }
      } else {
        this.state = {
          data: DataSource.getBlogPost(this.props.id)
        }
      }
    }

    componentDidMount () {
      // ... that takes care of the subscription...
      DataSource.addChangeListener(this.handleChange)
    }

    componentWillUnmount () {
      DataSource.removeChangeListener(this.handleChange)
    }

    handleChange () {
      if (this.props.type === 'comments') {
        this.setState({
          data: DataSource.getComments()
        })
      } else {
        this.setState({
          data: DataSource.getBlogPost(this.props.id)
        })
      }
    }

    render () {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent data={this.state.data} {...this.props} />
    }
  }
}

export default HOCWrapper
