import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components
import Button from 'basicComponents/Button'

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  bodyClassName: PropTypes.string,
  isShown: PropTypes.bool,
  title: PropTypes.string,
  confirmLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  hasConfirm: PropTypes.bool,
  hasCancel: PropTypes.bool,
  hasHeader: PropTypes.bool,
  hasFooter: PropTypes.bool,
}

const defaultProps = {
  isShown: false,
  confirmLabel: '確認',
  cancelLabel: '取消',
  onConfirm: () => {},
  onCancel: () => {},
  hasConfirm: true,
  hasCancel: true,
  hasHeader: true,
  hasFooter: true,
}

function Modal(props) {
  const {
    children,
    className,
    bodyClassName,
    isShown,
    title,
    confirmLabel,
    cancelLabel,
    onConfirm,
    onCancel,
    hasCancel,
    hasConfirm,
    hasHeader,
    hasFooter,
  } = props

  return (
    isShown && (
      <div className={cx('modal-cover')}>
        <div className={cx('modal', className)}>
          {hasHeader && (
            <div className={cx('modal__header')}>
              <p className={cx('modal__header-title')}>{title}</p>
            </div>
          )}
          <div className={cx('modal__body', bodyClassName)}>{children}</div>
          {hasFooter && (
            <div className={cx('modal__footer')}>
              {hasCancel && (
                <Button onClick={onCancel} type='default'>
                  {cancelLabel}
                </Button>
              )}
              {hasConfirm && (
                <Button onClick={onConfirm} type='primary'>
                  {confirmLabel}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    )
  )
}

Modal.propTypes = propTypes
Modal.defaultProps = defaultProps

export default Modal
