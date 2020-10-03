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

function House(props) {
  const { match } = props

  const { data } = useQuery(HOUSE_LIST, { fetchPolicy: 'network-only' })

  const result = data?.houses

  const [seletedHouse, setSeletedHouse] = useState({})

  return (
    <div className={cx('house')}>
      <Map />
      {isEmpty(seletedHouse) && <Result result={result} setSeletedHouse={setSeletedHouse} />}
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
