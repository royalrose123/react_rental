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
  isMapView: PropTypes.bool,
}

function Map(props) {
  const { result, setSeletedHouse, searchForm, setSearchForm, isMapView } = props

  useMapEffect({ result, setSeletedHouse, searchForm, setSearchForm })

  return <div id='map' className={cx('map')} data-is-map={isMapView} />
}

Map.propTypes = propTypes

export default Map
