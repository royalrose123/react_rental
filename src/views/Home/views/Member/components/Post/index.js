import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { isEmpty } from 'lodash'

// Components
import Thumbnail from '../../sharedComponents/Thumbnail'
import Button from 'basicComponents/Button'

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {
  userPost: PropTypes.array,
}

function Post(props) {
  const { userPost } = props

  return (
    <div className={cx('post')}>
      <div className={cx('post-list')}>
        {!isEmpty(userPost) &&
          userPost.map((item, index) => {
            return (
              <div key={index} className={cx('post-list__thumbnail')}>
                <Thumbnail {...item} />
                <div className={cx('post-list__thumbnail-button')}>
                  <Button type='primary' size='xs'>
                    修改
                  </Button>
                  <Button type='primary' size='xs'>
                    刪除
                  </Button>
                </div>
              </div>
            )
          })}
        {isEmpty(userPost) && <p className={cx('post-list__empty')}>目前沒有刊登</p>}
      </div>
    </div>
  )
}

Post.propTypes = propTypes

export default Post
