import React from 'react'
// import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components
import postPosterImage from 'assets/images/post_poster.jpeg'

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {}

function Post(props) {
  return (
    <div className={cx('post')}>
      <div className={cx('post__poster')}>
        <img className={cx('post__poster-image')} src={postPosterImage} />
        <div className={cx('post__poster-title')}>房屋刊登</div>
      </div>
    </div>
  )
}

Post.propTypes = propTypes

export default Post
