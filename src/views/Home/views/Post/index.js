import React from 'react'
import { Switch, Route, Redirect, useHistory, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import loadable from '@loadable/component'

// Components
import postPosterImage from 'assets/images/post_poster.jpeg'
import Modal from 'basicComponents/Modal'

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

const Create = loadable(() => import('./views/Create'))
const Edit = loadable(() => import('./views/Edit'))

export const propTypes = {
  match: PropTypes.object,
}

function Post(props) {
  const { match } = props

  const history = useHistory()
  const token = window.localStorage.getItem('token')

  return (
    <div className={cx('post')}>
      <div className={cx('post__poster')}>
        <img className={cx('post__poster-image')} src={postPosterImage} />
        <div className={cx('post__poster-title')}>房屋刊登</div>
      </div>
      {token && (
        <Switch>
          <Route strict sensitive path={`${match.url}/create`} component={Create} />
          <Route strict sensitive path={`${match.url}/:postId/edit`} component={Edit} />
          <Redirect push from='/' to={`${match.url}/create`} />
        </Switch>
      )}
      <Modal className={cx('post-modal')} isShown={!token} title='Remind' hasCancel={false} onConfirm={() => history.push('/home/house')}>
        請先登入或註冊會員
      </Modal>
    </div>
  )
}

Post.propTypes = propTypes

export default withRouter(Post)
