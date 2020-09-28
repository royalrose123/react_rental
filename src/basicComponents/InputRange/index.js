// Libs
import React from 'react'
import PropTypes from 'prop-types'

// Components
import InputRange from 'react-input-range'

// Style
import 'react-input-range/lib/css/index.css'

// Variables / Functions

// PropTypes
export const propTypes = {
  value: PropTypes.object,
  setValue: PropTypes.func,
  maxValue: PropTypes.number,
  minValue: PropTypes.number,
  custumClassNames: PropTypes.object,
}

// DefaultProps
export const defaultProps = {}

// react-input-range 的 default InputRangeClassNames
// https://github.com/davidchin/react-input-range
const DEFAULT_CLASS_NAMES = {
  activeTrack: 'input-range__track input-range__track--active',
  disabledInputRange: 'input-range input-range--disabled',
  inputRange: 'input-range',
  labelContainer: 'input-range__label-container',
  maxLabel: 'input-range__label input-range__label--max',
  minLabel: 'input-range__label input-range__label--min',
  slider: 'input-range__slider',
  sliderContainer: 'input-range__slider-container',
  track: 'input-range__track input-range__track--background',
  valueLabel: 'input-range__label input-range__label--value',
}

function InputRangeComponent(props) {
  const { value, setValue, maxValue, minValue, custumClassNames, ...restProps } = props

  return (
    <InputRange
      classNames={{
        ...DEFAULT_CLASS_NAMES,
        ...custumClassNames,
      }}
      maxValue={maxValue}
      minValue={minValue}
      value={value}
      onChange={(value) => setValue(value)}
      {...restProps}
    />
  )
}

InputRangeComponent.propTypes = propTypes
InputRangeComponent.defaultProps = defaultProps

export default InputRangeComponent
