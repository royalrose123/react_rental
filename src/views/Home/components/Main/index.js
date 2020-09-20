import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {
  children: PropTypes.object,
}

function Main(props) {
  const { children } = props

  return <div className={cx('main')}>{children}</div>
}

Main.propTypes = propTypes

export default Main
