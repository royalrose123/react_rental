import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { isEmpty } from 'lodash'
import GoogleMapReact from 'google-map-react'

// Components

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {}

function Map(props) {
  const [position, setPosition] = useState({})

  useEffect(() => {
    if (isEmpty(position)) {
      navigator.geolocation.getCurrentPosition((position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }

        setPosition({ ...coords })

        return coords
      })
    }
  }, [position])

  return (
    <div className={cx('map')}>
      {!isEmpty(position) && (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyD3v6Hz7dmZA3Tx0c7A6xhKxxeKdBeaNbg',
          }}
          defaultCenter={position}
          defaultZoom={15}
        />
      )}
    </div>
  )
}

Map.propTypes = propTypes

export default Map
