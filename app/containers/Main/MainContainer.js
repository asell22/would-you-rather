import React from 'react'
import { container } from './styles.css'
const MainContainer = React.createClass({
  render () {
    return (
      <div className={container}>
        {this.props.children}
      </div>
    )
  }
})

export default MainContainer
