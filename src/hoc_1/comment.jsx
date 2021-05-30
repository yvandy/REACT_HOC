import React from 'react'
import DataSource from './dataSource'
import HOCWrapper from './hocSolution'

class CommentList extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        {this.props.data.map(comment => (
          <div key={comment.id}>{comment.text}</div>
        ))}
      </div>
    )
  }
}
export default HOCWrapper(CommentList)
