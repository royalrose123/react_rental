import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { findIndex, isEmpty } from 'lodash'

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
  postId: PropTypes.number,
  price: PropTypes.number,
  city: PropTypes.string,
  distinct: PropTypes.string,
  address: PropTypes.string,
  houseDetail: PropTypes.string,
  surrounding: PropTypes.string,
  device: PropTypes.object,
  others: PropTypes.object,
  houseImg: PropTypes.array,
  setSeletedHouse: PropTypes.func,
  isMapView: PropTypes.bool,
}

function Detail(props) {
  const { postId, price, city, distinct, address, houseDetail, surrounding, device, others, houseImg, setSeletedHouse, isMapView } = props

  const history = useHistory()

  const [currentImage, setCurrentImage] = useState(houseImg[0].fileUrl)

  const imageLength = houseImg.length

  useEffect(() => {
    // 點地圖 marker 時當點選不同的 house 就要 reset currentImage
    if (isEmpty(postId)) {
      setCurrentImage(houseImg[0].fileUrl)
    }
  }, [houseImg, postId])

  const handlePreviousImage = () => {
    const currentIndex = findIndex(houseImg, { fileUrl: currentImage })

    if (currentIndex === 0) {
      setCurrentImage(houseImg[imageLength - 1].fileUrl)
    } else {
      setCurrentImage(houseImg[currentIndex - 1].fileUrl)
    }
  }

  const handleNextImage = () => {
    const currentIndex = findIndex(houseImg, { fileUrl: currentImage })

    if (currentIndex === imageLength - 1) {
      setCurrentImage(houseImg[0].fileUrl)
    } else {
      setCurrentImage(houseImg[currentIndex + 1].fileUrl)
    }
  }

  return (
    <div className={cx('detail')} data-is-map={isMapView}>
      <div className={cx('detail__button')}>
        <p className={cx('detail__button-back')} onClick={() => setSeletedHouse({})}>
          返回搜尋結果
        </p>
        {/* TODO:  還未實作收藏功能
          <div className={cx('detail__button-like')}>
            <Icons.Heart className={cx('detail__button-like-icon')} />
            收藏
          </div> */}
      </div>
      <div className={cx('detail__display')}>
        <div className={cx('detail__display-select', 'previous')} onClick={handlePreviousImage}>
          <Icons.Previous className={cx('detail__display-select-icon')} />
        </div>
        <img className={cx('detail__display-image')} src={currentImage} />
        <div className={cx('detail__display-dot')}>
          {houseImg.map((item, index) => (
            <Dot key={index} isActive={item.fileUrl === currentImage} {...item} setCurrentImage={setCurrentImage} />
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
            <p className={cx('detail__info-main__address-distinct')}>{`${city}${distinct}`}</p>
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
      <p className={cx('detail__more')} onClick={() => history.push(`/home/house/${postId}/info`)}>
        更多詳細資訊
      </p>
    </div>
  )
}

Detail.propTypes = propTypes

export default Detail
