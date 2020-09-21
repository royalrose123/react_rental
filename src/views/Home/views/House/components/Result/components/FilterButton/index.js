import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components
// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  isActive: PropTypes.bool,
}

function FilterButton(props) {
  const { children, className, size, isActive, ...restProps } = props

  return (
    <button className={cx('filter-button', className)} data-size={size} data-is-active={isActive} {...restProps}>
      {children}
    </button>
  )
}

FilterButton.propTypes = propTypes

export default FilterButton
