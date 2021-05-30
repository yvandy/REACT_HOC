import React from 'react'
import HOCSinglePage from './HocSinglePage'
class SecondPage extends React.Component {
  render () {
    return (
      <div>
        <h3>{this.props.textContent}</h3>
      </div>
    )
  }
}

export default HOCSinglePage(SecondPage)
