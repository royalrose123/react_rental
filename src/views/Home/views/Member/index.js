import React from 'react'
// import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {}

function Member(props) {
  return <div className={cx('member')}>Member</div>
}

Member.propTypes = propTypes

export default Member
