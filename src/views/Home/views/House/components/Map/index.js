import React from 'react'
// import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Libs
import useMapEffect from './hooks/useMapEffect'

// Components

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {}

function Map(props) {
  useMapEffect()

  return <div id='map' className={cx('map')} />
}

Map.propTypes = propTypes

export default Map
