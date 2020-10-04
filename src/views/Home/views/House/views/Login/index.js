import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
// import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { useMutation } from '@apollo/react-hooks'
import { useForm, FormProvider } from 'react-hook-form'

// Components
import Modal from 'basicComponents/Modal'
import HookForm from 'basicComponents/HookForm'
import Button from 'basicComponents/Button'

// Style
import styles from './style.module.scss'

// gql
import { CREATE_USER, LOGIN } from './gql'

// Variables / Functions
import { CREATE_USER_MESSAGE } from './constants/firebaseMessage'

const cx = classnames.bind(styles)

export const propTypes = {}

function Login(props) {
  const history = useHistory()

  const methods = useForm()
  const { handleSubmit } = methods

  const [isShownModal, setIsShownModal] = useState(false)
  const [isShownMessageModal, setIsShownMessageModal] = useState(false)
  const [isShownErrorModal, setIsShownErrorModal] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const [createUser] = useMutation(CREATE_USER, { errorPolicy: 'all' })
  const [login] = useMutation(LOGIN, { errorPolicy: 'all' })

  const isFirstRef = useRef(true)

  useEffect(() => {
    if (isFirstRef.current && isShownModal) {
      isFirstRef.current = false
    } else {
      setIsShownModal(true)
    }
  }, [isFirstRef, isShownModal, setIsShownModal])

  const handleCreateUser = (data) => {
    createUser({ variables: { ...data } }).then((result) => {
      const { errors } = result
      if (errors) {
        const errorMessage = errors[0].message

        const existedError = CREATE_USER_MESSAGE[errorMessage]

        if (existedError) {
          setErrorMessage(existedError)
        } else {
          setErrorMessage(errorMessage)
        }

        setIsShownErrorModal(true)
      }
    })
  }

  const handleLogin = (data) => {
    login({ variables: { ...data } }).then((result) => {
      const { errors } = result

      if (errors) {
        const errorMessage = errors[0].message

        const existedError = CREATE_USER_MESSAGE[errorMessage]

        if (existedError) {
          setErrorMessage(existedError)
        } else {
          setErrorMessage(errorMessage)
        }

        setIsShownErrorModal(true)
      } else {
        const { data } = result
        const { login } = data
        const { token, displayName, email, phoneNumber, photoURL, userId } = login

        const userInfo = {
          displayName,
          email,
          phoneNumber,
          photoURL,
          userId,
        }

        window.localStorage.setItem('token', token)
        window.localStorage.setItem('userInfo', JSON.stringify(userInfo))

        history.push('/')
      }
    })
  }

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
              <Button className={cx('login__action-button')} type='primary' size='lg' onClick={handleSubmit(handleCreateUser)}>
                註冊
              </Button>
              <Button className={cx('login__action-button')} type='primary' size='lg' onClick={handleSubmit(handleLogin)}>
                登入
              </Button>
            </div>
            <div className={cx('login__gmail')}>
              <Button className={cx('login__gmail-button')} type='danger' size='md' isBlock>
                Log In With Gmail
              </Button>
            </div>
          </div>
          <Modal
            className={cx('login-message')}
            isShown={isShownMessageModal}
            title='Message'
            hasCancel={false}
            onConfirm={() => setIsShownMessageModal(false)}
          >
            已寄信，請前往驗證
          </Modal>
          <Modal
            className={cx('login-error')}
            isShown={isShownErrorModal}
            title='Error'
            hasCancel={false}
            onConfirm={() => setIsShownErrorModal(false)}
            confirmType='danger'
          >
            {errorMessage}
          </Modal>
        </HookForm>
      </FormProvider>
    </Modal>
  )
}

Login.propTypes = propTypes

export default Login
