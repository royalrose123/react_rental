import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components
import InputField from './components/InputField'
import CheckboxField from './components/CheckboxField'
import TextareaField from './components/TextareaField'
import RadioField from './components/RadioField'

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {
  className: PropTypes.string,
  forwardRef: PropTypes.any,
}

function HookForm(props) {
  const { className, forwardRef, ...restProps } = props

  return <form className={cx('form', className)} ref={forwardRef} {...restProps} />
}

HookForm.propTypes = propTypes

const ConnectedFormWithRef = React.forwardRef((props, ref) => <HookForm {...props} forwardRef={ref} />)

ConnectedFormWithRef.InputField = InputField
ConnectedFormWithRef.CheckboxField = CheckboxField
ConnectedFormWithRef.TextareaField = TextareaField
ConnectedFormWithRef.RadioField = RadioField

export default ConnectedFormWithRef
