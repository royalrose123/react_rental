import React from 'react'
// import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { useHistory } from 'react-router-dom'

// Components
import Icons from 'assets/icons'
import NavItem from './components/NavItem'

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {}

function Header(props) {
  const history = useHistory()

  return (
    <div className={cx('home-header')}>
      <div className={cx('home-header-logo')}>
        <Icons.NavLogo className={cx('home-header-logo__icon')} onClick={() => history.push('/')} />
        <p className={cx('home-header-logo__title')}>Live Life</p>
      </div>
      <div className={cx('home-header-nav')}>
        <NavItem name='找房' path='house' />
        <NavItem name='刊登' path='post' />
        <NavItem name='會員' path='member' />
      </div>
    </div>
  )
}

Header.propTypes = propTypes

export default Header
