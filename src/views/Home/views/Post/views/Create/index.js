import React from 'react'
// import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { useMutation } from '@apollo/client'

// Libs
import { getInitialValues } from './methods/getInitialValues'
import { onSubmitClick } from '../../sharedMethods/handleSubmit'

// Components
import Form from '../../components/Form'

// Style
import styles from './style.module.scss'

// gql
import { ADD_HOUSE } from './gql'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {}

function Create(props) {
  const defaultValues = getInitialValues()

  const [addHouse, result] = useMutation(ADD_HOUSE)
  const { called, loading } = result

  const isSubmitSuccessfully = called && !loading

  return (
    <div className={cx('create')}>
      <Form defaultValues={defaultValues} onSubmitClick={onSubmitClick} mutationHouse={addHouse} isSubmitSuccessfully={isSubmitSuccessfully} />
    </div>
  )
}

Create.propTypes = propTypes

export default Create
