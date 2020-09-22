// Libs
import React from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'
import classnames from 'classnames/bind'

// Components

// Lib MISC

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

// PropTypes
export const propTypes = {
  name: PropTypes.string,
  group: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
}

function CheckboxField(props) {
  const { name, group, label, value } = props

  const { register } = useFormContext()

  const fieldName = group ? `${group}.${name}` : name

  return (
    <label className={cx('radio-wrapper')}>
      <input className={cx('radio')} type='radio' ref={register} name={fieldName} value={value} />
      {label}
    </label>
  )
}

CheckboxField.propTypes = propTypes

export default CheckboxField
