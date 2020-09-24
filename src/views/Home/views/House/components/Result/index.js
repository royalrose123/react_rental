import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { find, clone } from 'lodash'

// Components
import FilterButton from './components/FilterButton'

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {
  result: PropTypes.array,
}

const AMOUNT_FILTER_LIST = [
  { name: 1, isActive: false, value: 1 },
  { name: 2, isActive: false, value: 2 },
  { name: 3, isActive: false, value: 3 },
  { name: 4, isActive: false, value: 4 },
]

const TYPE_FILTER_LIST = [
  { name: '雅房', isActive: false, value: '雅房' },
  { name: '獨立套房', isActive: false, value: '獨立套房' },
  { name: '整層住家', isActive: false, value: '整層住家' },
]

function Result(props) {
  const { result } = props

  const [amountFilterList, setAmountFilterList] = useState(AMOUNT_FILTER_LIST)
  const [typeFilterList, setTypeFilterList] = useState(TYPE_FILTER_LIST)

  const handleFilterButtonClick = (value, index, currentList, setCurrentList) => {
    const selectedFilter = find(currentList, { value })
    const newSelectedFilter = { ...selectedFilter, isActive: !selectedFilter.isActive }
    const cloneCurrentList = clone(currentList)

    cloneCurrentList.splice(index, 1, newSelectedFilter)

    setCurrentList(cloneCurrentList)
  }

  return (
    <div className={cx('result')}>
      <div>{`台北市>行政區`}</div>
      <div className={cx('filter')}>
        <div className={cx('filter-row')}>
          <p className={cx('filter-row__title')}>月租金</p>
        </div>
        <div className={cx('filter-row')}>
          <p className={cx('filter-row__title')}>房間數量</p>
          <div className={cx('filter-row__button-wrapper')}>
            {amountFilterList.map((item, index) => (
              <FilterButton
                key={index}
                size='xs'
                isActive={item.isActive}
                onClick={() => handleFilterButtonClick(item.value, index, amountFilterList, setAmountFilterList)}
              >
                {item.name}
              </FilterButton>
            ))}
          </div>
        </div>
        <div className={cx('filter-row')}>
          <p className={cx('filter-row__title')}>房屋類型</p>
          <div className={cx('filter-row__button-wrapper')}>
            {typeFilterList.map((item, index) => (
              <FilterButton
                key={index}
                size='sm'
                isActive={item.isActive}
                onClick={() => handleFilterButtonClick(item.value, index, typeFilterList, setTypeFilterList)}
              >
                {item.name}
              </FilterButton>
            ))}
          </div>
        </div>
      </div>
      <div className={cx('result__amount')}>
        <p>{`${result?.length}筆結果`}</p>
      </div>
    </div>
  )
}

Result.propTypes = propTypes

export default Result
