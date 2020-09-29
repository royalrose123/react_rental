import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components
import Icons from 'assets/icons'
import Default from 'assets/images/default.jpeg'

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {
  roomAmount: PropTypes.number,
  restroomAmount: PropTypes.number,
  roomType: PropTypes.string,
}

const PRICE = 36000

function HouseCard(props) {
  const { roomAmount, restroomAmount, roomType } = props

  const [isLike, setIsLike] = useState(false)

  return (
    <div className={cx('house-card')}>
      <div className={cx('house-card__display')}>
        <img className={cx('house-card__display-image')} src={Default} />
        <div className={cx('house-card__display-row')}>
          <p className={cx('house-card__display-row-price')}>{PRICE.toLocaleString()}</p>
          <Icons.Heart
            className={cx('house-card__display-row-heart')}
            data-is-like={isLike}
            onClick={() => {
              setIsLike((prev) => !prev)
            }}
          />
        </div>
      </div>
      <div className={cx('house-card__info')}>
        <p>{`${roomAmount}間房間, ${restroomAmount}間廁所, ${roomType}`}</p>
      </div>
    </div>
  )
}

HouseCard.propTypes = propTypes

export default HouseCard
