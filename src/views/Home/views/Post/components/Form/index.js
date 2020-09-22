import React from 'react'
// import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components
import Row from './components/Row'
import FieldItem from './components/FieldItem'

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {}

function Form(props) {
  return (
    <div className={cx('form')}>
      <Row>
        <FieldItem title='標題' width='64px'>
          <input />
        </FieldItem>
        <FieldItem title='屋主' width='64px'>
          <p>Royal</p>
        </FieldItem>
      </Row>

      <Row>
        <FieldItem title='縣市' width='64px'>
          <input />
        </FieldItem>
        <FieldItem title='行政區' width='64px'>
          <input />
        </FieldItem>
        <FieldItem title='街道' width='64px'>
          <input />
        </FieldItem>
      </Row>

      <Row>
        <FieldItem title='價錢' width='64px'>
          <input />
        </FieldItem>
        <FieldItem title='坪數' width='64px'>
          <input />
        </FieldItem>
      </Row>

      <Row>
        <FieldItem title='房間數量' width='64px'>
          <input />
        </FieldItem>
        <FieldItem title='客廳數量' width='64px'>
          <input />
        </FieldItem>
        <FieldItem title='廁所數量' width='64px'>
          <input />
        </FieldItem>
      </Row>

      <Row>
        <FieldItem title='樓層' width='64px'>
          <input />
        </FieldItem>
        <FieldItem title='總樓層' width='64px'>
          <input />
        </FieldItem>
      </Row>

      <Row>
        <FieldItem title='類型' width='64px'>
          <label>
            <input type='radio' name='type' />
            獨立套房
          </label>
          <label>
            <input type='radio' name='type' />
            雅房
          </label>
          <label>
            <input type='radio' name='type' />
            整層住家
          </label>
        </FieldItem>
      </Row>

      <Row>
        <FieldItem title='設備' width='64px'>
          <label>
            <input type='checkbox' />
            桌子
          </label>
          <label>
            <input type='checkbox' />
            椅子
          </label>
          <label>
            <input type='checkbox' />
            衣櫃
          </label>
        </FieldItem>
      </Row>

      <Row>
        <FieldItem title='其他' width='64px'>
          <label>
            <input type='checkbox' />
            廚房
          </label>
          <label>
            <input type='checkbox' />
            電梯
          </label>
        </FieldItem>
      </Row>

      <Row>
        <FieldItem title='費用包含' width='64px'>
          <label>
            <input type='checkbox' />
            管理費
          </label>
          <label>
            <input type='checkbox' />
            清潔費
          </label>
        </FieldItem>
      </Row>

      <Row>
        <FieldItem title='押金' width='64px'>
          <input />
        </FieldItem>
        <FieldItem title='最短租期' width='64px'>
          <input />
        </FieldItem>
        <FieldItem title='開伙' width='64px'>
          <input />
        </FieldItem>
      </Row>

      <Row>
        <FieldItem title='養寵物' width='64px'>
          <input />
        </FieldItem>
        <FieldItem title='身份要求' width='64px'>
          <input />
        </FieldItem>
        <FieldItem title='性別要求' width='64px'>
          <input />
        </FieldItem>
      </Row>
    </div>
  )
}

Form.propTypes = propTypes

export default Form
