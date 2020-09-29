import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { useQuery } from '@apollo/react-hooks'
import { isEmpty } from 'lodash'

// Components
import Map from './components/Map'
import Result from './components/Result'
import Detail from './components/Detail'

// Style
import styles from './style.module.scss'

// gql
import { HOUSE_LIST } from './gql'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {}

function House(props) {
  const { data } = useQuery(HOUSE_LIST, { fetchPolicy: 'network-only' })

  const result = data?.house

  const [seletedHouse, setSeletedHouse] = useState({})

  return (
    <div className={cx('house')}>
      <Map />
      {isEmpty(seletedHouse) && <Result result={result} setSeletedHouse={setSeletedHouse} />}
      {!isEmpty(seletedHouse) && <Detail setSeletedHouse={setSeletedHouse} {...seletedHouse} />}
    </div>
  )
}

House.propTypes = propTypes

export default House
