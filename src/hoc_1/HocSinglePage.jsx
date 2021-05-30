import React from 'react'

var newData = {
  data: 'Data from HOC...'
}

var HOCSinglePage = ComposedComponent =>
  class extends React.Component {
    componentDidMount () {
      this.setState({
        textContent: newData.data
      })
    }
    render () {
      return <ComposedComponent {...this.props} {...this.state} />
    }
  }
export default HOCSinglePage
