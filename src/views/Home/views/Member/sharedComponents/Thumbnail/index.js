import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {
  postId: PropTypes.number,
  houseImg: PropTypes.array,
  price: PropTypes.number,
  roomAmount: PropTypes.number,
  restroomAmount: PropTypes.number,
  distinct: PropTypes.string,
}

function Thumbnail(props) {
  const { postId, houseImg, price, roomAmount, restroomAmount, distinct } = props

  const history = useHistory()

  return (
    <div className={cx('thumbnail')} onClick={() => history.push(`/home/house/${postId}/info`)}>
      <div className={cx('thumbnail__display')}>
        <img className={cx('thumbnail__display-image')} src={houseImg[0].fileUrl} />
        <p className={cx('thumbnail__display-price')}>{price.toLocaleString()}</p>
      </div>
      <div className={cx('thumbnail__info')}>
        <p className={cx('thumbnail__info-text')}>{`${roomAmount}間房間, ${restroomAmount}間廁所`}</p>
        <p className={cx('thumbnail__info-text')}>{distinct}</p>
      </div>
    </div>
  )
}

Thumbnail.propTypes = propTypes

export default Thumbnail
