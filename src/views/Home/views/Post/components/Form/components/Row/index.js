import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

function Row(props) {
  const { children } = props

  return <div className={cx('row')}>{children}</div>
}

Row.propTypes = propTypes

export default Row
