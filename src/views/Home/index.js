import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import loadable from '@loadable/component'
// import PropTypes from 'prop-types'
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

export const propTypes = {}

function Home(props) {
  return (
    <div className={cx('home')}>
      <Header />
      <Main>
        <Switch>
          <Route strict sensitive path='/home/house' component={House} />
          <Redirect push from='/' to='/home/house' />
        </Switch>
      </Main>
    </div>
  )
}

Home.propTypes = propTypes

export default Home
