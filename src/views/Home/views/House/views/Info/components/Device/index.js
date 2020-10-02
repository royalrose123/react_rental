import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components
import Icons from 'assets/icons'

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {
  hasDevice: PropTypes.bool,
  label: PropTypes.string,
}

function Thumbnail(props) {
  const { label, hasDevice } = props

  return (
    <div className={cx('device')}>
      {hasDevice && <Icons.Check className={cx('device-icon')} />}
      {!hasDevice && <Icons.Cross className={cx('device-icon')} />}
      <p>{label}</p>
    </div>
  )
}

Thumbnail.propTypes = propTypes

export default Thumbnail
