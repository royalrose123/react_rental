import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { find, clone } from 'lodash'
import InputRange from 'basicComponents/InputRange'

// Components
import FilterButton from './components/FilterButton'
import HouseCard from './components/HouseCard'

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {
  result: PropTypes.array,
  setSeletedHouse: PropTypes.func,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  searchForm: PropTypes.object,
  setSearchForm: PropTypes.func,
}

const RANGE_STEP = 1000

function Result(props) {
  const { result, setSeletedHouse, minValue, maxValue, searchForm, setSearchForm } = props

  const { price, roomAmount, roomType } = searchForm

  const handleFilterButtonClick = ({ value, field, index, currentList, setSearchForm }) => {
    const selectedFilter = find(currentList, { value })
    const newSelectedFilter = { ...selectedFilter, isActive: !selectedFilter.isActive }
    const cloneCurrentList = clone(currentList)

    cloneCurrentList.splice(index, 1, newSelectedFilter)

    setSearchForm({ ...searchForm, [field]: cloneCurrentList })
  }

  return (
    <div className={cx('result')}>
      <div>{`台北市>行政區`}</div>
      <div className={cx('filter')}>
        <div className={cx('filter-row')}>
          <p className={cx('filter-row__title')}>月租金</p>
          <div className={cx('filter-row__rent')}>
            <InputRange
              custumClassNames={{
                slider: cx('filter-row__rent-slider'),
                activeTrack: cx('filter-row__rent-track', 'active'),
                valueLabel: cx('filter-row__rent-value'),
                minLabel: cx('filter-row__rent-label'),
                maxLabel: cx('filter-row__rent-label'),
              }}
              minValue={minValue}
              maxValue={maxValue}
              value={price}
              onChange={(value) => setSearchForm({ ...searchForm, price: value })}
              step={RANGE_STEP}
            />
          </div>
        </div>
        <div className={cx('filter-row')}>
          <p className={cx('filter-row__title')}>房間數量</p>
          <div className={cx('filter-row__button-wrapper')}>
            {roomAmount.map((item, index) => (
              <FilterButton
                key={index}
                size='xs'
                isActive={item.isActive}
                onClick={() => handleFilterButtonClick({ value: item.value, field: 'roomAmount', index, currentList: roomAmount, setSearchForm })}
              >
                {item.name}
              </FilterButton>
            ))}
          </div>
        </div>
        <div className={cx('filter-row')}>
          <p className={cx('filter-row__title')}>房屋類型</p>
          <div className={cx('filter-row__button-wrapper')}>
            {roomType.map((item, index) => (
              <FilterButton
                key={index}
                size='sm'
                isActive={item.isActive}
                onClick={() => handleFilterButtonClick({ value: item.value, field: 'roomType', index, currentList: roomType, setSearchForm })}
              >
                {item.name}
              </FilterButton>
            ))}
          </div>
        </div>
      </div>
      <div className={cx('result__amount')}>
        <p>{`${result ? result?.length : 0}筆結果`}</p>
      </div>
      <div className={cx('result__list')}>
        {result?.map((item, index) => (
          <HouseCard key={index} houseInfo={item} setSeletedHouse={setSeletedHouse} />
        ))}
      </div>
    </div>
  )
}

Result.propTypes = propTypes

export default Result
