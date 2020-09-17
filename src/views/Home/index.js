import React from 'react'
// import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import styles from './style.module.scss'
import { useQuery } from '@apollo/react-hooks'

// Components

// Lib MISC

// gql
import { USER_LIST } from './gql'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {}

function Home(props) {
  // const { } = props;
  const { data, loading: suggestionLoading } = useQuery(USER_LIST)

  console.log('data', data)
  console.log('suggestionLoading', suggestionLoading)

  return <div className={cx('home')}>Home</div>
}

Home.propTypes = propTypes

export default Home
