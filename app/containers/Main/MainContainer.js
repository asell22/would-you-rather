import React from 'react'
import { container } from './styles.css'
import { Navigation } from 'components'

const MainContainer = React.createClass({
  render () {
    return (
      <div className={container}>
        <Navigation isAuthed={true}/>
        {this.props.children}
      </div>
    )
  }
})

export default MainContainer
