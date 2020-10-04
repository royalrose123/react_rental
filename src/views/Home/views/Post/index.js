import React from 'react'
import { useHistory } from 'react-router-dom'
// import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components
import postPosterImage from 'assets/images/post_poster.jpeg'
import Form from './components/Form'
import Modal from 'basicComponents/Modal'

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {}

function Post(props) {
  const history = useHistory()
  const token = window.localStorage.getItem('token')

  return (
    <div className={cx('post')}>
      <div className={cx('post__poster')}>
        <img className={cx('post__poster-image')} src={postPosterImage} />
        <div className={cx('post__poster-title')}>房屋刊登</div>
      </div>
      {token && <Form />}
      <Modal className={cx('post-modal')} isShown={!token} title='Remind' hasCancel={false} onConfirm={() => history.goBack(-1)}>
        請先登入或註冊會員
      </Modal>
    </div>
  )
}

Post.propTypes = propTypes

export default Post
