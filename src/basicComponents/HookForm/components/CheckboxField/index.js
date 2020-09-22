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
}

function CheckboxField(props) {
  const { name, group, label } = props

  const { register } = useFormContext()

  const fieldName = group ? `${group}.${name}` : name

  return (
    <label className={cx('checkbox-wrapper')}>
      <input className={cx('checkbox')} type='checkbox' ref={register} name={fieldName} />
      {label}
    </label>
  )
}

CheckboxField.propTypes = propTypes

export default CheckboxField
