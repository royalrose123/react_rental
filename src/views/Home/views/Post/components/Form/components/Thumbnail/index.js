import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {
  index: PropTypes.number,
  fileUrl: PropTypes.string,
  handleCloseClick: PropTypes.func,
}

function Thumbnail(props) {
  const { index, fileUrl, handleCloseClick } = props

  const onCloseClick = () => {
    handleCloseClick(index)
  }

  return (
    <div className={cx('thumbnail')}>
      <div className={cx('thumbnail-cover')}>
        <div className={cx('thumbnail-cover-close')} onClick={onCloseClick}>
          X
        </div>
      </div>
      <img className={cx('thumbnail-image')} src={fileUrl} />
    </div>
  )
}

Thumbnail.propTypes = propTypes

export default Thumbnail
