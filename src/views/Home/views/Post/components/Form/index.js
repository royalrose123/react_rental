import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { useHistory } from 'react-router-dom'
import { useForm, FormProvider } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers'
import { cloneDeep } from 'lodash'

// Libs
import { schema } from './validation'

// Components
import Row from './components/Row'
import FieldItem from './components/FieldItem'
import HookForm from 'basicComponents/HookForm'
import Upload from 'basicComponents/Upload'
import Thumbnail from './components/Thumbnail'
import Modal from 'basicComponents/Modal'
import Button from 'basicComponents/Button'

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {
  action: PropTypes.string,
  defaultValues: PropTypes.object,
  onSubmitClick: PropTypes.func,
  mutationHouse: PropTypes.func,
  isSubmitSuccessfully: PropTypes.bool,
}
function Form(props) {
  const { action, defaultValues, onSubmitClick, mutationHouse, isSubmitSuccessfully } = props
  const [isShownModal, setIsShownModal] = useState(false)

  const history = useHistory()

  const methods = useForm({ defaultValues, resolver: yupResolver(schema) })
  const { setValue, handleSubmit, register, watch } = methods

  useEffect(() => {
    register('fileList')
    register('postUser')
    register('postId')
  }, [register])

  const currentFileList = watch('fileList')
  const userName = watch('postUser.displayName')

  const onFileSelect = (fileList) => {
    if (fileList.length + currentFileList.length > 5) {
      return alert('最多只能上傳五張照片')
    }

    const newFileList = fileList.map((file) => {
      const fileUrl = window.URL.createObjectURL(file)

      return { file, fileUrl, filename: file.name }
    })

    setValue('fileList', currentFileList.concat(newFileList))
  }

  const handleRemoveClick = (index) => {
    const newFileList = cloneDeep(currentFileList)

    newFileList.splice(index, 1)

    setValue('fileList', newFileList)
  }

  const handleSubmitSuccess = () => {
    history.push('/home/house')
  }

  return (
    <FormProvider {...methods}>
      <HookForm className={cx('form')}>
        <Row>
          <FieldItem title='標題' width='80px'>
            <HookForm.InputField name='title' />
          </FieldItem>
          <FieldItem title='屋主' width='80px'>
            <p>{userName}</p>
          </FieldItem>
        </Row>
        <Row>
          <FieldItem title='縣市' width='80px'>
            <HookForm.InputField name='city' />
          </FieldItem>
          <FieldItem title='行政區' width='80px'>
            <HookForm.InputField name='distinct' />
          </FieldItem>
          <FieldItem title='街道' width='80px'>
            <HookForm.InputField name='street' />
          </FieldItem>
        </Row>
        <Row>
          <FieldItem title='價錢' width='80px'>
            <HookForm.InputField name='price' />
          </FieldItem>
          <FieldItem title='坪數' width='80px'>
            <HookForm.InputField name='size' />
          </FieldItem>
        </Row>
        <Row>
          <FieldItem title='房間數量' width='80px'>
            <HookForm.InputField name='roomAmount' />
          </FieldItem>
          <FieldItem title='客廳數量' width='80px'>
            <HookForm.InputField name='livingroomAmount' />
          </FieldItem>
          <FieldItem title='廁所數量' width='80px'>
            <HookForm.InputField name='restroomAmount' />
          </FieldItem>
        </Row>
        <Row>
          <FieldItem title='樓層' width='80px'>
            <HookForm.InputField name='floor' />
          </FieldItem>
          <FieldItem title='總樓層' width='80px'>
            <HookForm.InputField name='totalFloor' />
          </FieldItem>
        </Row>
        <Row>
          <FieldItem title='類型' width='80px'>
            <HookForm.RadioField name='roomType'>
              <HookForm.RadioField.Item name='roomType' label='獨立套房' value='獨立套房' />
              <HookForm.RadioField.Item name='roomType' label='雅房' value='雅房' />
              <HookForm.RadioField.Item name='roomType' label='整層住家' value='整層住家' />
            </HookForm.RadioField>
          </FieldItem>
        </Row>
        <Row>
          <FieldItem title='設備' width='80px'>
            <div className={cx('form-checkbox-wrapper')}>
              <HookForm.CheckboxField name='table' label='桌子' group='device' />
              <HookForm.CheckboxField name='chair' label='椅子' group='device' />
              <HookForm.CheckboxField name='wardrobe' label='衣櫃' group='device' />
              <HookForm.CheckboxField name='bed' label='床' group='device' />
              <HookForm.CheckboxField name='sofa' label='沙發' group='device' />
              <HookForm.CheckboxField name='heater' label='熱水器' group='device' />
              <HookForm.CheckboxField name='television' label='電視' group='device' />
              <HookForm.CheckboxField name='refrigerator' label='冰箱' group='device' />
              <HookForm.CheckboxField name='airConditioner' label='冷氣' group='device' />
              <HookForm.CheckboxField name='laundryMachine' label='洗衣機' group='device' />
              <HookForm.CheckboxField name='network' label='網路' group='device' />
              <HookForm.CheckboxField name='cable' label='第四台' group='device' />
            </div>
          </FieldItem>
        </Row>
        <Row>
          <FieldItem title='其他' width='80px'>
            <HookForm.CheckboxField name='kitchen' label='廚房' group='others' />
            <HookForm.CheckboxField name='elevator' label='電梯' group='others' />
          </FieldItem>
        </Row>
        <Row>
          <FieldItem title='費用包含' width='80px'>
            <HookForm.CheckboxField name='associationFee' label='管理費' group='priceInclude' />
            <HookForm.CheckboxField name='cleaningFee' label='清潔費' group='priceInclude' />
            <HookForm.CheckboxField name='waterBill' label='水費' group='priceInclude' />
            <HookForm.CheckboxField name='networkBill' label='網路費' group='priceInclude' />
          </FieldItem>
        </Row>
        <Row>
          <FieldItem title='押金' width='80px'>
            <HookForm.InputField name='require.deposit' placeholder='一個月' />
          </FieldItem>
          <FieldItem title='最短租期' width='80px'>
            <HookForm.InputField name='require.leastPeriod' placeholder='半年' />
          </FieldItem>
          <FieldItem title='開伙' width='80px'>
            <HookForm.InputField name='require.cook' placeholder='不可以' />
          </FieldItem>
        </Row>
        <Row>
          <FieldItem title='養寵物' width='80px'>
            <HookForm.InputField name='require.pet' placeholder='可以' />
          </FieldItem>
          <FieldItem title='身份要求' width='80px'>
            <HookForm.InputField name='require.identify' placeholder='學生、上班族、都可' />
          </FieldItem>
          <FieldItem title='性別要求' width='80px'>
            <HookForm.InputField name='require.gender' placeholder='限男生、限女生、都可' />
          </FieldItem>
        </Row>
        <Row />
        <FieldItem title='照片' width='80px'>
          <div className={cx('form-file')}>
            {currentFileList?.map((item, index) => (
              <Thumbnail key={index} index={index} handleRemoveClick={handleRemoveClick} {...item} />
            ))}
            {currentFileList?.length < 5 && <Upload accept='image/*' handleFiles={onFileSelect} multiple name='fileList' />}
          </div>
        </FieldItem>
        <Row>
          <FieldItem title='生活周遭' width='80px'>
            <HookForm.TextareaField className={cx('form-textarea')} name='surrounding' />
          </FieldItem>
        </Row>
        <Row>
          <FieldItem title='房屋說明' width='80px'>
            <HookForm.TextareaField className={cx('form-textarea')} name='houseDetail' />
          </FieldItem>
        </Row>
        <div className={cx('form-submit')}>
          <Button type='primary' htmlType='submit' onClick={handleSubmit((data) => onSubmitClick(data, setIsShownModal, mutationHouse))}>
            刊登
          </Button>
        </div>
      </HookForm>
      <Modal
        className={cx('form-modal')}
        bodyClassName={cx('form-modal-body')}
        isShown={isShownModal}
        hasHeader={false}
        hasFooter={isSubmitSuccessfully}
        hasCancel={false}
        hasConfirm={isSubmitSuccessfully}
        onConfirm={handleSubmitSuccess}
      >
        {isSubmitSuccessfully && <p>{`${action === 'upload' ? '上傳' : '編輯'}成功!`}</p>}
        {!isSubmitSuccessfully && <p>{`${action === 'upload' ? '上傳' : '編輯'}中，請稍候...!`}</p>}
      </Modal>
    </FormProvider>
  )
}

Form.propTypes = propTypes

export default Form
