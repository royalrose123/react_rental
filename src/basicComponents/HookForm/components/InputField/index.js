// Libs
import React from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'
import classnames from 'classnames/bind'

// Components

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

// PropTypes
export const propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
}

// DefaultProps
export const defaultProps = {}

function InputField(props) {
  const { name, className, ...restProps } = props

  const { register } = useFormContext()

  return <input className={cx('input', className)} ref={register} name={name} {...restProps} />
}

InputField.propTypes = propTypes
InputField.defaultProps = defaultProps

export default InputField
