import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {
  url: PropTypes.string,
  currentImage: PropTypes.string,
  setCurrentImage: PropTypes.func,
}

function Thumbnail(props) {
  const { url, currentImage, setCurrentImage } = props

  return (
    <div className={cx('thumbnail')} onClick={() => setCurrentImage(url)}>
      <img className={cx('thumbnail-image')} src={url} data-is-active={currentImage === url} />
    </div>
  )
}

Thumbnail.propTypes = propTypes

export default Thumbnail
