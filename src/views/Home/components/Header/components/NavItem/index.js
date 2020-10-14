import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { NavLink, withRouter } from 'react-router-dom'

// Components

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {
  className: PropTypes.string,
  match: PropTypes.object,
  name: PropTypes.string,
  path: PropTypes.string,
}

function NavItem(props) {
  const { className, match, name, path } = props

  return (
    <NavLink className={cx('nav-link', className)} replace to={`${match.url}/${path}`}>
      <span className={cx('nav-link__item')}>{name}</span>
    </NavLink>
  )
}

NavItem.propTypes = propTypes

export default withRouter(NavItem)
