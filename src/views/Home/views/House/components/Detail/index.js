import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components
import Icons from 'assets/icons'
import Default from 'assets/images/default.jpeg'
import InfoItem from './components/InfoItem'
import Label from './components/Label'

// Style
import styles from './style.module.scss'

// Variables / Functions
import { DEVICE, OTHERS } from 'constants/house'
const cx = classnames.bind(styles)

export const propTypes = {
  setSeletedHouse: PropTypes.func,
  price: PropTypes.number,
  city: PropTypes.string,
  distict: PropTypes.string,
  address: PropTypes.string,
  houseDetail: PropTypes.string,
  surrounding: PropTypes.string,
  device: PropTypes.object,
  others: PropTypes.object,
}

function Detail(props) {
  const { setSeletedHouse, price, city, distict, address, houseDetail, surrounding, device, others } = props

  return (
    <div className={cx('detail')}>
      <div className={cx('detail__button')}>
        <p className={cx('detail__button-back')} onClick={() => setSeletedHouse({})}>
          返回搜尋結果
        </p>
        <div className={cx('detail__button-like')}>
          <Icons.Heart className={cx('detail__button-like-icon')} />
          收藏
        </div>
      </div>
      <div className={cx('detail__display')}>
        <img className={cx('detail__display-image')} src={Default} />
      </div>
      <div className={cx('detail__info')}>
        <div className={cx('detail__info-main')}>
          <p className={cx('detail__info-main__price')}>{price.toLocaleString()}</p>
          <div className={cx('detail__info-main__separate')} />
          <div className={cx('detail__info-main__address')}>
            <p className={cx('detail__info-main__address-distict')}>{`${city}${distict}`}</p>
            <p className={cx('detail__info-main__address-street')}>{address}</p>
          </div>
        </div>
        <InfoItem title='屋況說明'>{houseDetail}</InfoItem>
        <InfoItem title='生活周遭'>{surrounding}</InfoItem>
        <InfoItem title='房屋設備'>
          <div className={cx('detail__info-device')}>
            {Object.entries(device)
              .filter((pair) => {
                const value = pair[1]

                return value === true
              })
              .map((item, index) => {
                const key = item[0]

                return <Label key={index} label={DEVICE[key]} />
              })}
          </div>
        </InfoItem>
        <InfoItem title='其他設備'>
          <div className={cx('detail__info-device')}>
            {Object.entries(others)
              .filter((pair) => {
                const value = pair[1]

                return value === true
              })
              .map((item, index) => {
                const key = item[0]

                return <Label key={index} label={OTHERS[key]} />
              })}
          </div>
        </InfoItem>
      </div>
    </div>
  )
}

Detail.propTypes = propTypes

export default Detail
