import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Libs
import useMapEffect from './hooks/useMapEffect'

// Components

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {
  result: PropTypes.array,
  setSeletedHouse: PropTypes.func,
  searchForm: PropTypes.object,
  setSearchForm: PropTypes.func,
}

function Map(props) {
  const { result, setSeletedHouse, searchForm, setSearchForm } = props

  useMapEffect({ result, setSeletedHouse, searchForm, setSearchForm })

  return <div id='map' className={cx('map')} />
}

Map.propTypes = propTypes

export default Map
