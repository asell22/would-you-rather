import React from 'react'
const MainContainer = React.createClass({
  render () {
    return (
      <div>
        <p>{'Hello Alex'}</p>
        <p>{this.props.children}</p>
      </div>
    )
  }
})

export default MainContainer
