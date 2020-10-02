import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import loadable from '@loadable/component'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import styles from './style.module.scss'

// Components
import Header from './components/Header'
import Main from './components/Main'

// Lib MISC

// gql

// Variables / Functions
const cx = classnames.bind(styles)

const House = loadable(() => import('./views/House'))
const Post = loadable(() => import('./views/Post'))
const Member = loadable(() => import('./views/Member'))

export const propTypes = {
  match: PropTypes.object,
}

function Home(props) {
  const { match } = props

  return (
    <div className={cx('home')}>
      <Header />
      <Main>
        <Switch>
          <Route strict sensitive path={[`${match.url}/house`, `${match.url}/house/:postId/info`]} component={House} />
          <Route strict sensitive path={`${match.url}/post`} component={Post} />
          <Route strict sensitive path={`${match.url}/member`} component={Member} />
          <Redirect push from='/' to={`${match.url}/house`} />
        </Switch>
      </Main>
    </div>
  )
}

Home.propTypes = propTypes

export default withRouter(Home)
