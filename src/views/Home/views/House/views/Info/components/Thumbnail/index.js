import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {
  fileUrl: PropTypes.string,
  currentImage: PropTypes.string,
  setCurrentImage: PropTypes.func,
}

function Thumbnail(props) {
  const { fileUrl, currentImage, setCurrentImage } = props

  return (
    <div className={cx('thumbnail')} onClick={() => setCurrentImage(fileUrl)}>
      <img className={cx('thumbnail-image')} src={fileUrl} data-is-active={currentImage === fileUrl} />
    </div>
  )
}

Thumbnail.propTypes = propTypes

export default Thumbnail
