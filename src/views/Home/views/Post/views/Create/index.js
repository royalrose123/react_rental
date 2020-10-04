import React from 'react'
// import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Libs
import { getInitialValues } from './methods/getInitialValues'

// Components
import Form from '../../components/Form'

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {}

function Create(props) {
  console.log('Create Create Create')
  const defaultValues = getInitialValues()

  return (
    <div className={cx('create')}>
      <Form defaultValues={defaultValues} />
    </div>
  )
}

Create.propTypes = propTypes

export default Create
