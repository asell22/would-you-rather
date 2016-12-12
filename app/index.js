import React from 'react'
import ReactDOM from 'react-dom'
import { big } from './styles.css'

const Main = React.createClass({
  render () {
    return (
      <p className="big">{'Hello Alex'}</p>
    )
  }
})

ReactDOM.render(
  <Main />,
  document.getElementById('app')
)
