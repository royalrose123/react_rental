import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { findIndex } from 'lodash'

// Components
import Icons from 'assets/icons'
import InfoItem from './components/InfoItem'
import Label from './components/Label'
import Dot from './components/Dot'

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
  houseImg: PropTypes.array,
}

function Detail(props) {
  const { setSeletedHouse, price, city, distict, address, houseDetail, surrounding, device, others, houseImg } = props

  const [currentImage, setCurrentImage] = useState(houseImg[0].url)

  const imageLength = houseImg.length

  const handlePreviousImage = () => {
    const currentIndex = findIndex(houseImg, { url: currentImage })

    if (currentIndex === 0) {
      setCurrentImage(houseImg[imageLength - 1].url)
    } else {
      setCurrentImage(houseImg[currentIndex - 1].url)
    }
  }

  const handleNextImage = () => {
    const currentIndex = findIndex(houseImg, { url: currentImage })

    if (currentIndex === imageLength - 1) {
      setCurrentImage(houseImg[0].url)
    } else {
      setCurrentImage(houseImg[currentIndex + 1].url)
    }
  }

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
        <div className={cx('detail__display-select', 'previous')} onClick={handlePreviousImage}>
          <Icons.Previous className={cx('detail__display-select-icon')} />
        </div>
        <img className={cx('detail__display-image')} src={currentImage} />
        <div className={cx('detail__display-dot')}>
          {houseImg.map((item, index) => (
            <Dot key={index} isActive={item.url === currentImage} {...item} setCurrentImage={setCurrentImage} />
          ))}
        </div>
        <div className={cx('detail__display-select', 'next')} onClick={handleNextImage}>
          <Icons.Next className={cx('detail__display-select-icon')} />
        </div>
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
