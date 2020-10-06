import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { useQuery, useMutation } from '@apollo/react-hooks'

// Libs
import { getInitialValues } from './methods/getInitialValues'
import { onSubmitClick } from '../../sharedMethods/handleSubmit'

// Components
import Form from '../../components/Form'

// Style
import styles from './style.module.scss'

// gql
import { HOUSE_INFO, EDIT_HOUSE } from './gql'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {
  match: PropTypes.object,
}

function Edit(props) {
  const { match } = props
  const { params } = match
  const { postId } = params

  const [editHouse, result] = useMutation(EDIT_HOUSE)
  const { called, loading } = result

  const { data = { house: {} }, called: isHouseCalled, loading: isHouseLoading } = useQuery(HOUSE_INFO, {
    variables: { postId: Number(postId) },
    fetchPolicy: 'network-only',
  })
  const { house } = data
  const isLoaded = isHouseCalled && !isHouseLoading

  const isSubmitSuccessfully = called && !loading

  const defaultValues = getInitialValues(house)

  return (
    <div className={cx('edit')}>
      {isLoaded && (
        <Form
          action='edit'
          defaultValues={defaultValues}
          onSubmitClick={onSubmitClick}
          mutationHouse={editHouse}
          isSubmitSuccessfully={isSubmitSuccessfully}
        />
      )}
    </div>
  )
}

Edit.propTypes = propTypes

export default withRouter(Edit)
