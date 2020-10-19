import React, { useState } from 'react'
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

  const [isListOpened, setIsListOpened] = useState(false)

  const token = window.localStorage.getItem('token')

  return (
    <div className={cx('home-header')}>
      <div className={cx('home-header__logo')}>
        <Icons.NavLogo className={cx('home-header__logo-icon')} onClick={() => history.push('/')} />
        <p className={cx('home-header__logo-title')}>Live Life</p>
      </div>
      <div className={cx('home-header__nav')}>
        <Icons.Menu className={cx('home-header__nav-icon')} onClick={() => setIsListOpened(true)} />
        <div className={cx('home-header__nav-list')} data-is-opened={isListOpened}>
          <Icons.Previous className={cx('home-header__nav-list-icon')} onClick={() => setIsListOpened(false)} />
          <NavItem className={cx('home-header__nav-list-item')} name='找房' path='house' />
          <NavItem className={cx('home-header__nav-list-item')} name='刊登' path='post' />
          {token && <NavItem className={cx('home-header__nav-list-item')} name='會員' path='member' />}
          {!token && <NavItem className={cx('home-header__nav-list-item')} name='登入' path='house/login' />}
        </div>
      </div>
    </div>
  )
}

Header.propTypes = propTypes

export default Header
