import React from 'react'
// import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { useQuery } from '@apollo/react-hooks'

// Components
import Map from './components/Map'
import Result from './components/Result'

// Style
import styles from './style.module.scss'

// gql
import { HOUSE_LIST } from './gql'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {}

function House(props) {
  const { data } = useQuery(HOUSE_LIST, { fetchPolicy: 'network-only' })

  console.log('data', data)

  return (
    <div className={cx('house')}>
      <Map />
      <Result result={data?.house} />
    </div>
  )
}

House.propTypes = propTypes

export default House
