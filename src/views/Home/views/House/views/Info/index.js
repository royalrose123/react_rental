import React from 'react'
import { useHistory } from 'react-router-dom'
// import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components

// Style
import styles from './style.module.scss'
import FullModal from 'basicComponents/FullModal'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {}

function Info(props) {
  // const {} = props

  console.log('Info props', props)

  const history = useHistory()

  return (
    <FullModal hasFooter={false} title='房屋資訊' onBack={() => history.push('home/house')}>
      <div className={cx('info')}>info</div>
    </FullModal>
  )
}

Info.propTypes = propTypes

export default Info
