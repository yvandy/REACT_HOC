import React from 'react'
import DataSource from './dataSource'
import HOCWrapper from './hocSolution'

class BlogPost extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <div>{this.props.data.blogPost}</div>
  }
}

export default HOCWrapper(BlogPost)
