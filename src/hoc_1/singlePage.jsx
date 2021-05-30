import React from 'react'
import HOCSinglePage from './HocSinglePage'
class SinglePage extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.textContent}</h1>
      </div>
    )
  }
}

export default HOCSinglePage(SinglePage)
