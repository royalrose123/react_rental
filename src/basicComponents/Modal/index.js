import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components
import Button from 'basicComponents/Button'
import Icons from 'assets/icons'

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
  onBack: PropTypes.func,
  hasConfirm: PropTypes.bool,
  hasCancel: PropTypes.bool,
  hasHeader: PropTypes.bool,
  hasFooter: PropTypes.bool,
  hasBack: PropTypes.bool,
}

const defaultProps = {
  isShown: false,
  confirmLabel: '確認',
  cancelLabel: '取消',
  onConfirm: () => {},
  onCancel: () => {},
  onBack: () => {},
  hasConfirm: true,
  hasCancel: true,
  hasHeader: true,
  hasFooter: true,
  hasBack: false,
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
    onBack,
    hasCancel,
    hasConfirm,
    hasHeader,
    hasFooter,
    hasBack,
  } = props

  return (
    isShown && (
      <div className={cx('modal-cover')}>
        <div className={cx('modal', className)}>
          {hasHeader && (
            <div className={cx('modal__header')}>
              {hasBack && <Icons.Previous className={cx('modal__header-back')} onClick={onBack} />}
              <div className={cx('modal__header-title')}>
                <p className={cx('modal__header-title-text')}>{title}</p>
              </div>
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
