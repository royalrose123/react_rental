import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components
import memberPosterImage from 'assets/images/member_poster.jpg'
import Button from 'basicComponents/Button'
import Info from './components/Info'
import Favorite from './components/Favorite'
import Post from './components/Post'

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {}

const TAB = {
  INFO: 'info',
  FAVORITE: 'favorite',
  POST: 'post',
}

function Member(props) {
  const [currentTab, setCurrentTab] = useState(TAB.INFO)

  console.log('currentTab', currentTab)

  return (
    <div className={cx('member')}>
      <div className={cx('member__poster')}>
        <img className={cx('member__poster-image')} src={memberPosterImage} />
        <div className={cx('member__poster-title')}>會員中心</div>
      </div>

      <div className={cx('member__main')}>
        <div className={cx('member__main-tab')}>
          <Button className={cx('member__main-tab-button')} type='primary' size='md' onClick={() => setCurrentTab(TAB.INFO)}>
            基本資料
          </Button>
          <Button className={cx('member__main-tab-button')} type='primary' size='md' onClick={() => setCurrentTab(TAB.FAVORITE)}>
            我的最愛
          </Button>
          <Button className={cx('member__main-tab-button')} type='primary' size='md' onClick={() => setCurrentTab(TAB.POST)}>
            我的刊登
          </Button>
          <Button className={cx('member__main-tab-button')} type='primary' size='md'>
            登出
          </Button>
        </div>
        <div className={cx('member__main-content')}>
          {currentTab === TAB.INFO && <Info />}
          {currentTab === TAB.FAVORITE && <Favorite />}
          {currentTab === TAB.POST && <Post />}
        </div>
      </div>
    </div>
  )
}

Member.propTypes = propTypes

export default Member
