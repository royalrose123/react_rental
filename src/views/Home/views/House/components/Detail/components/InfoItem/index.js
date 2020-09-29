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
  title: PropTypes.string,
}

function InfoItem(props) {
  const { children, title } = props

  return (
    <div className={cx('info-item')}>
      <div className={cx('info-item__title')}>{title}</div>
      {children}
    </div>
  )
}

InfoItem.propTypes = propTypes

export default InfoItem
