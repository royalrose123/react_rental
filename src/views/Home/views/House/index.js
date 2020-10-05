import React, { useState } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import loadable from '@loadable/component'
import PropTypes from 'prop-types'
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

const Info = loadable(() => import('./views/Info'))
const Login = loadable(() => import('./views/Login'))

export const propTypes = {
  match: PropTypes.object,
}

const MIN_VALUE = 0
const MAX_VALUE = 100000

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

const MAP_BOUNDS = {
  NELat: 0,
  NELng: 0,
  SWLat: 0,
  SWLng: 0,
}

const initialSearchForm = {
  price: { min: MIN_VALUE, max: MAX_VALUE },
  roomAmount: AMOUNT_FILTER_LIST,
  roomType: TYPE_FILTER_LIST,
  mapBounds: MAP_BOUNDS,
}

function House(props) {
  const { match } = props

  const [seletedHouse, setSeletedHouse] = useState({})
  const [searchForm, setSearchForm] = useState(initialSearchForm)

  const { data } = useQuery(HOUSE_LIST, { variables: { ...searchForm }, fetchPolicy: 'network-only' })

  const result = data?.houses

  return (
    <div className={cx('house')}>
      <Map result={result} setSeletedHouse={setSeletedHouse} searchForm={searchForm} setSearchForm={setSearchForm} />
      {isEmpty(seletedHouse) && (
        <Result
          result={result}
          setSeletedHouse={setSeletedHouse}
          searchForm={searchForm}
          setSearchForm={setSearchForm}
          minValue={MIN_VALUE}
          maxValue={MAX_VALUE}
        />
      )}
      {!isEmpty(seletedHouse) && <Detail setSeletedHouse={setSeletedHouse} {...seletedHouse} />}
      <Switch>
        <Route strict sensitive path={`${match.url}/:postId/info`} component={Info} />
        <Route strict sensitive path={`${match.url}/login`} component={Login} />
      </Switch>
    </div>
  )
}

House.propTypes = propTypes

export default withRouter(House)
