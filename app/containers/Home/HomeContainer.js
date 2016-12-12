import React from 'react'
import { header, subheader } from './styles.css'
const HomeContainer = React.createClass({
  render () {
    return (
      <div>
        <h1 className={ header }>{'Would You Rather'}</h1>
        <h3 className={ subheader }>{'The 100 year old American Classic'}</h3>
      </div>

    )
  }
})

export default HomeContainer
