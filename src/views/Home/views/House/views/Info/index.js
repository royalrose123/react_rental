import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { useQuery } from '@apollo/react-hooks'
import { isEmpty, findIndex } from 'lodash'

// Libs
import { setPhoneSeparate } from 'utils/setPhoneSeparate'

// Components
import Icons from 'assets/icons'
import Thumbnail from './components/Thumbnail'
import Device from './components/Device'
import Avatar from 'assets/images/avatar.png'
import Button from 'basicComponents/Button'

// Style
import styles from './style.module.scss'
import FullModal from 'basicComponents/FullModal'

// gql
import { HOUSE_INFO } from './gql'

// Variables / Functions
import { DEVICE, PRICE_INCLUDING } from 'constants/house'
const cx = classnames.bind(styles)

export const propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
}

function Info(props) {
  const { match, history } = props

  const { params } = match
  const { postId } = params

  const { data = { house: {} } } = useQuery(HOUSE_INFO, { variables: { postId: Number(postId) } })
  const { house } = data
  const {
    houseImg,
    require = {},
    device = {},
    priceInclude = {},
    price,
    size,
    floor,
    totalFloor,
    roomAmount,
    restroomAmount,
    roomType,
    surrounding,
    houseDetail,
  } = house
  const { gender, deposit, leastPeriod, identify, cook, pet } = require

  const [currentImage, setCurrentImage] = useState('')

  const imageLength = houseImg?.length

  useEffect(() => {
    if (!isEmpty(houseImg)) {
      setCurrentImage(houseImg[0].url)
    }
  }, [houseImg])

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
    <FullModal hasFooter={false} title='房屋資訊' onBack={() => history.push('home/house')}>
      <div className={cx('info')}>
        <div className={cx('info-left')}>
          <div className={cx('info-left__display')}>
            <div className={cx('info-left__display-select', 'previous')} onClick={handlePreviousImage}>
              <Icons.Previous className={cx('info-left__display-select-icon')} />
            </div>
            <img className={cx('info-left__display-image')} src={currentImage} />
            <div className={cx('info-left__display-list')}>
              {houseImg?.map((item, index) => (
                <Thumbnail key={index} currentImage={currentImage} setCurrentImage={setCurrentImage} {...item} />
              ))}
            </div>
            <div className={cx('info-left__display-select', 'next')} onClick={handleNextImage}>
              <Icons.Next className={cx('info-left__display-select-icon')} />
            </div>
          </div>

          <div className={cx('info-left__require')}>
            <div className={cx('info-left__require-row')}>
              <div className={cx('info-left__require-row-item')}>
                <p className={cx('info-left__require-row-item-title')}>性別要求</p>
                <p>：</p>
                <p className={cx('info-left__require-row-item-value')}>{gender}</p>
              </div>
              <div className={cx('info-left__require-row-item')}>
                <p className={cx('info-left__require-row-item-title')}>押金</p>
                <p>：</p>
                <p className={cx('info-left__require-row-item-value')}>{deposit}</p>
              </div>
            </div>

            <div className={cx('info-left__require-row')}>
              <div className={cx('info-left__require-row-item')}>
                <p className={cx('info-left__require-row-item-title')}>最短租期</p>
                <p>：</p>
                <p className={cx('info-left__require-row-item-value')}>{leastPeriod}</p>
              </div>
              <div className={cx('info-left__require-row-item')}>
                <p className={cx('info-left__require-row-item-title')}>身份要求</p>
                <p>：</p>
                <p className={cx('info-left__require-row-item-value')}>{identify}</p>
              </div>
            </div>

            <div className={cx('info-left__require-row')}>
              <div className={cx('info-left__require-row-item')}>
                <p className={cx('info-left__require-row-item-title')}>開伙</p>
                <p>：</p>
                <p className={cx('info-left__require-row-item-value')}>{cook}</p>
              </div>
              <div className={cx('info-left__require-row-item')}>
                <p className={cx('info-left__require-row-item-title')}>養寵物</p>
                <p>：</p>
                <p className={cx('info-left__require-row-item-value')}>{pet}</p>
              </div>
            </div>
          </div>

          <div className={cx('info-left__device')}>
            <p className={cx('info-left__device-title')}>房東提供</p>
            <div className={cx('info-left__device-list')}>
              {Object.entries(device)
                .filter((item) => typeof item[1] === 'boolean')
                .map((item, index) => {
                  const label = item[0]
                  const hasDevice = item[1]

                  return <Device key={index} label={DEVICE[label]} hasDevice={hasDevice} />
                })}
            </div>
          </div>

          <div className={cx('info-left__section')}>
            <p className={cx('info-left__section-title')}>生活交通</p>
            <p className={cx('info-left__section-content')}>{surrounding}</p>
          </div>

          <div className={cx('info-left__section')}>
            <p className={cx('info-left__section-title')}>屋況說明</p>
            <p className={cx('info-left__section-content')}>{houseDetail}</p>
          </div>

          <div className={cx('info-left__ask')}>
            <p className={cx('info-left__ask-text')}>房屋問答</p>
            <p className={cx('info-left__ask-text')}>目前沒有問答</p>
          </div>

          <div className={cx('info-left__question')}>
            <p className={cx('info-left__question-title')}>我要提問</p>
            <textarea className={cx('info-left__question-textarea')} />
            <Button className={cx('info-left__question-submit')} type='brown'>
              確認送出
            </Button>
          </div>
        </div>

        <div className={cx('info-right')}>
          <div className={cx('info-right__info')}>
            <div className={cx('info-right__info-price')}>
              <p className={cx('info-right__info-price-number')}>{price?.toLocaleString()}</p>
              <p className={cx('info-right__info-price-unit')}>元/月</p>
            </div>
            <div className={cx('info-right__info-include')}>
              含
              {Object.entries(priceInclude)
                .filter((item) => item[1] === true)
                .map((item) => {
                  const include = item[0]

                  return PRICE_INCLUDING[include]
                })
                .join('/')}
            </div>
            <div className={cx('info-right__info-row')}>{`坪數：${size}坪`}</div>
            <div className={cx('info-right__info-row')}>{`樓層：${floor}F/${totalFloor}F`}</div>
            <div className={cx('info-right__info-row')}>{`房間：${roomAmount}間`}</div>
            <div className={cx('info-right__info-row')}>{`廁所：${restroomAmount}間`}</div>
            <div className={cx('info-right__info-row')}>{`類型：${roomType}`}</div>
          </div>
          <div className={cx('info-right__landlord')}>
            <div className={cx('info-right__landlord-avatar')}>
              <img className={cx('info-right__landlord-avatar-icon')} src={Avatar} />
              <p className={cx('info-right__landlord-avatar-name')}>陳先生</p>
            </div>
            <div className={cx('info-right__landlord-phone')}>
              <Icons.Phone className={cx('info-right__landlord-phone-icon')} />
              <p className={cx('info-right__landlord-phone-number')}>{setPhoneSeparate('0912345678')}</p>
            </div>
          </div>
        </div>
      </div>
    </FullModal>
  )
}

Info.propTypes = propTypes

export default withRouter(Info)
