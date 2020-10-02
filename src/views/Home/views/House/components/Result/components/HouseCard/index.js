import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components
import Icons from 'assets/icons'

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {
  houseInfo: PropTypes.shape({
    roomAmount: PropTypes.number,
    restroomAmount: PropTypes.number,
    roomType: PropTypes.string,
    price: PropTypes.number,
    houseImg: PropTypes.array,
  }),
  setSeletedHouse: PropTypes.func,
}

const defaultProps = {
  houseInfo: {
    houseImg: [],
  },
}

function HouseCard(props) {
  const { houseInfo, setSeletedHouse } = props
  const { roomAmount, restroomAmount, roomType, price, houseImg = [] } = houseInfo

  const [isLike, setIsLike] = useState(false)

  const onHouseCardClick = (event) => {
    event.preventDefault()

    setSeletedHouse(houseInfo)
  }

  const onHeartClick = (event) => {
    event.stopPropagation()

    setIsLike((prev) => !prev)
  }

  return (
    <div className={cx('house-card')} onClick={onHouseCardClick}>
      <div className={cx('house-card__display')}>
        <img className={cx('house-card__display-image')} src={houseImg[0].url} />
        <div className={cx('house-card__display-row')}>
          <p className={cx('house-card__display-row-price')}>{price.toLocaleString()}</p>
          <Icons.Heart className={cx('house-card__display-row-heart')} data-is-like={isLike} onClick={onHeartClick} />
        </div>
      </div>
      <div className={cx('house-card__info')}>
        <p>{`${roomAmount}間房間, ${restroomAmount}間廁所, ${roomType}`}</p>
      </div>
    </div>
  )
}

HouseCard.propTypes = propTypes
HouseCard.defaultProps = defaultProps

export default HouseCard
