import React from 'react'
// import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {}

function House(props) {
  return <div className={cx('house')}>House</div>
}

House.propTypes = propTypes

export default House