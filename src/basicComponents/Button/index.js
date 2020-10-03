import React from 'react'
import classnames from 'classnames/bind'
import PropTypes from 'prop-types'

// Components

// Lib MISC

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

// PropTypes
export const propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  htmlType: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  type: PropTypes.oneOf(['default', 'primary', 'danger', 'brown']),
  isBlock: PropTypes.bool,
}

// DefaultProps
export const defaultProps = {
  htmlType: 'button',
  size: 'sm',
  type: 'default',
  isBlock: false,
}

function Button(props) {
  const { children, className, onClick, htmlType, size, type, isBlock } = props

  return (
    <button className={cx('button', className)} onClick={onClick} type={htmlType} data-size={size} data-type={type} data-is-block={isBlock}>
      {children}
    </button>
  )
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
