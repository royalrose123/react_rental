import React from 'react'
// import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { useForm, FormProvider } from 'react-hook-form'
import { useMutation } from '@apollo/react-hooks'

// Components
import Row from './components/Row'
import FieldItem from './components/FieldItem'
import HookForm from 'basicComponents/HookForm'

// Style
import styles from './style.module.scss'

// Variables / Functions
import { ADD_HOUSE } from './gql'
const cx = classnames.bind(styles)

export const propTypes = {}

function Form(props) {
  const methods = useForm()
  const { handleSubmit } = methods

  const [addHouse] = useMutation(ADD_HOUSE)

  const onSubmitClick = (data) => {
    console.log('onSubmitClick data', data)
    addHouse({ variables: { title: 'testtt', price: 222 } })
  }

  return (
    <FormProvider {...methods}>
      <HookForm className={cx('form')}>
        <Row>
          <FieldItem title='標題' width='80px'>
            <HookForm.InputField name='title' />
          </FieldItem>
          <FieldItem title='屋主' width='80px'>
            <p>Royal</p>
          </FieldItem>
        </Row>

        <Row>
          <FieldItem title='縣市' width='80px'>
            <HookForm.InputField name='city' />
          </FieldItem>
          <FieldItem title='行政區' width='80px'>
            <HookForm.InputField name='distict' />
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
            <HookForm.InputField name='livingAmount' />
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
            <HookForm.RadioField name='roomType' label='獨立套房' value='獨立套房' />
            <HookForm.RadioField name='roomType' label='雅房' value='雅房' />
            <HookForm.RadioField name='roomType' label='整層住家' value='整層住家' />
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
            <HookForm.InputField name='deposit' />
          </FieldItem>
          <FieldItem title='最短租期' width='80px'>
            <HookForm.InputField name='leastPeriod' />
          </FieldItem>
          <FieldItem title='開伙' width='80px'>
            <HookForm.InputField name='cook' />
          </FieldItem>
        </Row>

        <Row>
          <FieldItem title='養寵物' width='80px'>
            <HookForm.InputField name='pet' />
          </FieldItem>
          <FieldItem title='身份要求' width='80px'>
            <HookForm.InputField name='identify' />
          </FieldItem>
          <FieldItem title='性別要求' width='80px'>
            <HookForm.InputField name='gender' />
          </FieldItem>
        </Row>

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
        <div>
          <button type='submit' onClick={handleSubmit(onSubmitClick)}>
            刊登
          </button>
        </div>
      </HookForm>
    </FormProvider>
  )
}

Form.propTypes = propTypes

export default Form
