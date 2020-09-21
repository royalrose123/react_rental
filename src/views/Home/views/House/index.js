import React from 'react'
// import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components
import Map from './components/Map'
import Result from './components/Result'

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {}

function House(props) {
  return (
    <div className={cx('house')}>
      <Map />
      <Result />
    </div>
  )
}

House.propTypes = propTypes

export default House
