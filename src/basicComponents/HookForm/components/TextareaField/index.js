// Libs
import React from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'
import classnames from 'classnames/bind'

// Components
import ErrorMessage from '../ErrorMessage'

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

// PropTypes
export const propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
}

// DefaultProps
export const defaultProps = {}

function TextareaField(props) {
  const { className, name, value } = props

  const { register } = useFormContext()

  return (
    <div>
      <div className={cx('textarea-wrapper')}>
        <textarea className={cx('textarea', className)} ref={register} name={name} value={value} />
      </div>
      <ErrorMessage name={name} />
    </div>
  )
}

TextareaField.propTypes = propTypes
TextareaField.defaultProps = defaultProps

export default TextareaField
