import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {
  label: PropTypes.string,
}

function Label(props) {
  const { label } = props

  return <p className={cx('label')}>{label}</p>
}

Label.propTypes = propTypes

export default Label
