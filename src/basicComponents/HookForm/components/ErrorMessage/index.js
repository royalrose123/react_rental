// Libs
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage as ErrorMessageComponent } from '@hookform/error-message'

// Components

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

// PropTypes
export const propTypes = {
  name: PropTypes.string,
}

// DefaultProps
export const defaultProps = {}

function ErrorMessage(props) {
  const { name } = props

  const { errors } = useFormContext()

  return (
    <ErrorMessageComponent
      name={name}
      errors={errors}
      render={({ message }) => (
        <div className={cx('error')}>
          <div className={cx('error-message')}>{message}</div>
        </div>
      )}
    />
  )
}

ErrorMessage.propTypes = propTypes
ErrorMessage.defaultProps = defaultProps

export default ErrorMessage
