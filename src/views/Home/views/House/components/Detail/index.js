import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {
  setSeletedHouse: PropTypes.func,
}

function Detail(props) {
  const { setSeletedHouse } = props

  return (
    <div className={cx('detail')}>
      <p className={cx('detail-back')} onClick={() => setSeletedHouse({})}>
        返回搜尋結果
      </p>
    </div>
  )
}

Detail.propTypes = propTypes

export default Detail
