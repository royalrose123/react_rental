// Libs
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { useFormContext } from 'react-hook-form'

// Components
import ErrorMessage from '../ErrorMessage'

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

  return (
    <div>
      <input className={cx('input', className)} ref={register} name={name} {...restProps} />
      <ErrorMessage name={name} />
    </div>
  )
}

InputField.propTypes = propTypes
InputField.defaultProps = defaultProps

export default InputField
