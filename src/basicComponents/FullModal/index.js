import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components
import Modal from 'basicComponents/Modal'

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {
  children: PropTypes.object,
}

const defaultProps = {}

function FullModal(props) {
  const { children, ...restProps } = props

  return (
    <Modal className={cx('full-modal')} bodyClassName={cx('full-modal-body')} isShown hasBack {...restProps}>
      {children}
    </Modal>
  )
}

FullModal.propTypes = propTypes
FullModal.defaultProps = defaultProps

export default FullModal
