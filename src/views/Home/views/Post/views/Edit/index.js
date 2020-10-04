import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { useQuery } from '@apollo/react-hooks'

// Libs
import { getInitialValues } from './methods/getInitialValues'

// Components
import Form from '../../components/Form'

// Style
import styles from './style.module.scss'

// gql
import { HOUSE_INFO } from './gql'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {
  match: PropTypes.object,
}

function Edit(props) {
  const { match } = props
  const { params } = match
  const { postId } = params

  const { data = { house: {} }, called, loading } = useQuery(HOUSE_INFO, { variables: { postId: Number(postId) } })
  const { house } = data
  const isLoaded = called && !loading

  const defaultValues = getInitialValues(house)

  return <div className={cx('edit')}>{isLoaded && <Form defaultValues={defaultValues} />}</div>
}

Edit.propTypes = propTypes

export default withRouter(Edit)
