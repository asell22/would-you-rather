import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { container, navContainer, link } from './styles.css'

Navigation.propTypes = ActionLinks.propTypes = NavLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired
}

const NavLinks = ({isAuthed}) => {
  return isAuthed === true
    ? <ul>
        <li><Link className={link} to='/' className={link}>{'Home'}</Link></li>
      </ul>
    : null
}


const ActionLinks = ({isAuthed}) => {
  return isAuthed === true
  ? <ul>
      <li>MODAL</li>
      <li><Link className={link} to='/logout' className={link}>{'Logout'}</Link></li>
    </ul>
  : <ul>
      <li><Link className={link} to='/' className={link}>{'Home'}</Link></li>
      <li><Link className={link} to='/auth' className={link}>{'Authenticate'}</Link></li>
    </ul>
}

const Navigation = ({isAuthed}) => (
  <div className={container}>
    <nav className={navContainer}>
      <NavLinks isAuthed={isAuthed}/>
      <ActionLinks isAuthed={isAuthed}/>
    </nav>
  </div>

)

export default Navigation
