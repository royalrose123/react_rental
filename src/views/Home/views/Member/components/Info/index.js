import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components

// Style
import styles from './style.module.scss'
import Button from 'basicComponents/Button'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {}

const MODE = {
  VIEW: 'view',
  EDIT: 'edit',
}

function Info(props) {
  // const { children } = props
  const [currentMode, setcurrentMode] = useState(MODE.VIEW)

  return (
    <div className={cx('info')}>
      <div className={cx('info-avatar')} />
      <div className={cx('info-row')}>
        <p className={cx('info-row-title')}>性別</p>
      </div>
      <div className={cx('info-row')}>
        <p className={cx('info-row-title')}>ID</p>
        <p className={cx('info-row-content')}>aD21osK3edhVxLVzQUgJ4UvHxe33</p>
      </div>
      <div className={cx('info-row')}>
        <p className={cx('info-row-title')}>姓名</p>
        <p className={cx('info-row-content')}>王小明</p>
      </div>
      <div className={cx('info-row')}>
        <p className={cx('info-row-title')}>手機</p>
        <p className={cx('info-row-content')}>0912345678</p>
      </div>
      <div className={cx('info-row')}>
        <p className={cx('info-row-title')}>信箱</p>
        <p className={cx('info-row-content')}>zaqwsx@gmail.com</p>
      </div>
      <div className={cx('info-row', 'button')}>
        {currentMode === MODE.VIEW && (
          <Button className={cx('info-button')} type='primary' size='md' onClick={() => setcurrentMode(MODE.EDIT)}>
            修改資料
          </Button>
        )}
        {currentMode === MODE.EDIT && (
          <>
            <Button className={cx('info-button')} type='primary' size='md'>
              確認
            </Button>
            <Button className={cx('info-button')} type='primary' size='md' onClick={() => setcurrentMode(MODE.VIEW)}>
              取消
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

Info.propTypes = propTypes

export default Info
