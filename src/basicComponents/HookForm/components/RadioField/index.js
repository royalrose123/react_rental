// Libs
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components
import Item from './Item'
import ErrorMessage from '../ErrorMessage'

// Lib MISC

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

// PropTypes
export const propTypes = {
  children: PropTypes.array,
  name: PropTypes.string,
}

const defaultProps = {}

function RadioField(props) {
  const { children, name } = props

  return (
    <div>
      <div className={cx('radio')}>{children}</div>
      <ErrorMessage name={name} />
    </div>
  )
}

RadioField.propTypes = propTypes
RadioField.defaultProps = defaultProps

RadioField.Item = Item

export default RadioField
