import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { useQuery } from '@apollo/react-hooks'

// Components

// Style
import styles from './style.module.scss'
import FullModal from 'basicComponents/FullModal'

// gql
import { HOUSE_INFO } from './gql'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
}

function Info(props) {
  const { match, history } = props

  const { params } = match
  const { postId } = params

  const { data } = useQuery(HOUSE_INFO, { variables: { postId: Number(postId) } })

  console.log('data', data)

  return (
    <FullModal hasFooter={false} title='房屋資訊' onBack={() => history.push('home/house')}>
      <div className={cx('info')}>info</div>
    </FullModal>
  )
}

Info.propTypes = propTypes

export default withRouter(Info)
