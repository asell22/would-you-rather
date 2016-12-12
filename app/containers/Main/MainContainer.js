import React from 'react'
const MainContainer = React.createClass({
  render () {
    return (
      <div>
        <h1>{'Hello Alex'}</h1>
        <p>{this.props.children}</p>
      </div>
    )
  }
})

export default MainContainer
