import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { useForm, FormProvider, useWatch } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import { useMutation } from '@apollo/react-hooks'

// Libs
import { schema } from './validation'
import { getInitialValues } from './methods/getInitialValues'

// Components
import HookForm from 'basicComponents/HookForm'

// gql
import { EDIT_USER } from './gql'

// Style
import styles from './style.module.scss'
import Button from 'basicComponents/Button'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {
  gender: PropTypes.string,
  userId: PropTypes.string,
  email: PropTypes.string,
  displayName: PropTypes.string,
  phoneNumber: PropTypes.string,
}

const defaultProps = {
  gender: '',
  userId: '',
  email: '',
  displayName: '',
  phoneNumber: null,
}

const MODE = {
  VIEW: 'view',
  EDIT: 'edit',
}

function Info(props) {
  const defaultValues = getInitialValues(props)
  const methods = useForm({ defaultValues, resolver: yupResolver(schema), shouldUnregister: false })
  const { register, handleSubmit, clearErrors, setValue, control } = methods

  const [currentMode, setcurrentMode] = useState(MODE.VIEW)

  const [editUser] = useMutation(EDIT_USER, { errorPolicy: 'all' })

  const userInfoRef = useRef(defaultValues)

  const userInfo = useWatch({
    control,
  })

  const { userId, email, displayName, phoneNumber } = userInfo

  useEffect(() => {
    register('userId')
    register('gender')
  }, [register])

  const onConfirmClick = (data) => {
    editUser({ variables: { ...data } })
      .then((result) => {
        const localStorageUserInfo = JSON.parse(window.localStorage.getItem('userInfo'))

        const newUserInfo = { ...localStorageUserInfo, ...userInfo }

        window.localStorage.setItem('userInfo', JSON.stringify(newUserInfo))

        userInfoRef.current = userInfo
        setcurrentMode(MODE.VIEW)
      })
      .catch((error) => {
        console.log('editUser error', error)
      })
  }

  const onCancelClick = () => {
    clearErrors()

    const { gender, email, displayName, phoneNumber } = userInfoRef.current

    setValue('gender', gender)
    setValue('email', email)
    setValue('displayName', displayName)
    setValue('phoneNumber', phoneNumber)
    setcurrentMode(MODE.VIEW)
  }

  return (
    <FormProvider {...methods}>
      <HookForm className={cx('form')}>
        <div className={cx('info')}>
          <div className={cx('info-avatar')} />
          <div className={cx('info-row')}>
            <p className={cx('info-row-title')}>性別</p>
            <HookForm.RadioField name='gender'>
              <HookForm.RadioField.Item name='gender' label='男' value='男' disabled={currentMode === MODE.VIEW} />
              <HookForm.RadioField.Item name='gender' label='女' value='女' disabled={currentMode === MODE.VIEW} />
            </HookForm.RadioField>
          </div>
          <div className={cx('info-row')}>
            <p className={cx('info-row-title')}>ID</p>
            <p className={cx('info-row-content')}>{userId}</p>
          </div>
          <div className={cx('info-row')}>
            <p className={cx('info-row-title')}>姓名</p>
            {currentMode === MODE.VIEW && <p className={cx('info-row-content')}>{displayName ?? '-'}</p>}
            {currentMode === MODE.EDIT && <HookForm.InputField className={cx('info-row-input')} name='displayName' />}
          </div>
          <div className={cx('info-row')}>
            <p className={cx('info-row-title')}>手機</p>
            {currentMode === MODE.VIEW && <p className={cx('info-row-content')}>{phoneNumber ?? '-'}</p>}
            {currentMode === MODE.EDIT && <HookForm.InputField className={cx('info-row-input')} name='phoneNumber' />}
          </div>
          <div className={cx('info-row')}>
            <p className={cx('info-row-title')}>信箱</p>
            {currentMode === MODE.VIEW && <p className={cx('info-row-content')}>{email ?? '-'}</p>}
            {currentMode === MODE.EDIT && <HookForm.InputField className={cx('info-row-input')} name='email' />}
          </div>
          <div className={cx('info-row', 'button')}>
            {currentMode === MODE.VIEW && (
              <Button className={cx('info-button')} type='primary' size='md' onClick={() => setcurrentMode(MODE.EDIT)}>
                修改資料
              </Button>
            )}
            {currentMode === MODE.EDIT && (
              <>
                <Button className={cx('info-button')} type='primary' size='md' onClick={handleSubmit(onConfirmClick)}>
                  確認
                </Button>
                <Button className={cx('info-button')} type='primary' size='md' onClick={onCancelClick}>
                  取消
                </Button>
              </>
            )}
          </div>
        </div>
      </HookForm>
    </FormProvider>
  )
}

Info.propTypes = propTypes
Info.defaultProps = defaultProps

export default Info
