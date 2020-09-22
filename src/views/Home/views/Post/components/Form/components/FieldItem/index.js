import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  title: PropTypes.string,
  width: PropTypes.string,
}

function FieldItem(props) {
  const { children, title, width } = props

  return (
    <div className={cx('field-item')}>
      <div className={cx('field-item-title')} style={{ width }}>
        {title}
      </div>
      {children}
    </div>
  )
}

FieldItem.propTypes = propTypes

export default FieldItem
