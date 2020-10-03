import React, { useState, useEffect, useRef } from 'react'
// import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { useForm, FormProvider } from 'react-hook-form'

// Components
import Modal from 'basicComponents/Modal'
import HookForm from 'basicComponents/HookForm'

// Style
import styles from './style.module.scss'
import Button from 'basicComponents/Button'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {}

function Login(props) {
  const methods = useForm()
  const { getValues } = methods

  const [isShownModal, setIsShownModal] = useState(false)

  const isFirstRef = useRef(true)

  useEffect(() => {
    if (isFirstRef.current && isShownModal) {
      isFirstRef.current = false
    } else {
      setIsShownModal(true)
    }
  }, [isFirstRef, isShownModal, setIsShownModal])

  console.log('getValues(', getValues())

  return (
    <Modal
      className={cx('login-modal')}
      bodyClassName={cx('login-modal-body')}
      isShown={isShownModal}
      hasHeader={false}
      hasFooter={false}
      shouldCloseOnExternalClick
    >
      <FormProvider {...methods}>
        <HookForm className={cx('form')}>
          <div className={cx('login')}>
            <div className={cx('login__input')}>
              <HookForm.InputField className={cx('login__input-item')} name='email' placeholder='Email' />
              <HookForm.InputField className={cx('login__input-item')} name='password' placeholder='******' type='password' />
            </div>
            <p className={cx('login__forget')}>忘記密碼？</p>
            <div className={cx('login__action')}>
              <Button className={cx('login__action-button')} type='primary' size='lg'>
                註冊
              </Button>
              <Button className={cx('login__action-button')} type='primary' size='lg'>
                登入
              </Button>
            </div>
            <div className={cx('login__gmail')}>
              <Button className={cx('login__gmail-button')} type='danger' size='md' isBlock>
                Log In With Gmail
              </Button>
            </div>
          </div>
        </HookForm>
      </FormProvider>
    </Modal>
  )
}

Login.propTypes = propTypes

export default Login
