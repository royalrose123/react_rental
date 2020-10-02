import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {
  isActive: PropTypes.bool,
  url: PropTypes.string,
  setCurrentImage: PropTypes.func,
}

function Dot(props) {
  const { isActive, url, setCurrentImage } = props

  const onDotClick = () => {
    setCurrentImage(url)
  }

  return <div className={cx('dot')} data-is-active={isActive} onClick={onDotClick} />
}

Dot.propTypes = propTypes

export default Dot
